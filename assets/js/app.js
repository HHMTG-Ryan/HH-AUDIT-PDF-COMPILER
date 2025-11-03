// ======= CONFIG mirrored from Python (will externalize in Step 7) =======
const CLOSING_ORDER = [
  "commitment only","kyc","idv","pep","mtg application","insurance","consent","cost of credit","form 10 only","form 10 to lender"
];
const MULTI_INCLUDE_SLOTS = new Set(["kyc","pep","consent","insurance"]);
const DISPLAY_NAMES = {
  "commitment only":"Commitment Only","kyc":"KYC","idv":"IDV","pep":"PEP","mtg application":"Mtg Application","insurance":"Insurance","consent":"Consent","cost of credit":"Cost of Borrowing","form 10 only":"Form 10 Only","form 10 to Lender":"Form 10 to Lender",
};
const CLIENT_PKG_ORDER = ["thank you","amortization","commitment only","form 10 only","cost of credit"];
const SYNONYMS = {
  "commitment only":["commit only","commitment"],
  "mtg application":["mortgage application","mtg app","mortgage app","application"],
  "idv":["idv","verification"],
  "cost of credit":["cob","cost of borrowing","disclosure"],
  "insurance":["prospr","mpp","manulife","sun life","sunlife","indem","assurant"],
  "form 10 only":["form 10","form10","broker compensation"],
  "form 10 to lender":["form 10 to lender","form10 to lender","compensation to lender"],
  "kyc":["know your client","know-your-client","client information"],
  "pep":["pep","politically exposed"],
  "consent":["consent","authorization","authorisation"],
  "thank you":["thank you","thank-you","thanks"],
  "amortization":["amortization","amortisation","amort sched","amort schedule"],
};

// ======= State / utils =======
let pickedFiles = [];
let pickedMap = new Map();
let dirHandle = null;
let lastClosingUsedNames = new Set();
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const $ = (sel) => document.querySelector(sel);
function log(m){
  const el = document.getElementById('log');
  if(!el) return;
  el.textContent += m + '\n';
  // Optional cap to prevent runaway logs
  if (el.textContent.length > 200000) el.textContent = el.textContent.slice(-150000);
  el.scrollTop = el.scrollHeight;
}
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const natKey = (s) => s.toLowerCase().split(/(\d+)/).map(t=>/^\d+$/.test(t)?Number(t):t);

// ======= Status UI (auto-create if missing) =======
function ensureStatus(){
  let el = document.getElementById('status');
  if (!el) {
    el = document.createElement('div');
    el.id = 'status';
    el.className = 'status';
    el.setAttribute('role','status');
    el.style.margin = '12px 0';
    el.style.fontSize = '14px';
    el.innerHTML = `<span class="spinner" style="display:none;margin-right:6px">⏳</span><span class="status-text"></span>`;
    const main = document.querySelector('main') || document.body;
    main.insertBefore(el, main.firstChild);
  }
  return el;
}
function setStatus(text, state='running'){
  const el = ensureStatus();
  el.removeAttribute('hidden');
  el.dataset.state = state; // running | ready | error
  const
