:root {
  --bg:#f7fafc; --panel:#ffffff; --text:#1a2a33; --muted:#5b7288; --brand:#22a366; --brand-ink:#0a3b22; --accent:#1f6feb; --line:#e6edf3;
  --btn:#eef2f6; --btn-border:#cfd9e3; --pill:#f1f6fa; --ok:#0e8346; --miss:#c62828;
}
*{ box-sizing:border-box; }
html,body{ margin:0; padding:0; background:var(--bg); color:var(--text); font:16px/1.45 system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
header{ padding:20px; background:#ffffff; border-bottom:1px solid var(--line); }
.header-wrap{ display:flex; align-items:center; gap:16px; max-width:1100px; margin:0 auto; }
.logo{ height:44px; width:auto; object-fit:contain; }
h1{ margin:0; font-size:22px; letter-spacing:.2px; }
.sub{ color:var(--muted); font-size:14px; }
.helper{ font-size:14px; color:var(--muted); margin-top:6px; }

main{ max-width:1100px; margin:0 auto; padding:20px 20px 80px; }
.panel{ background:var(--panel); border:1px solid var(--line); border-radius:14px; padding:18px; margin:14px 0; box-shadow:0 1px 0 rgba(0,0,0,.02); }
.row{ display:flex; gap:12px; flex-wrap:wrap; align-items:center; }

label.btn, button.btn{ background:var(--btn); border:1px solid var(--btn-border); color:var(--text); padding:12px 16px; border-radius:10px; cursor:pointer; transition:.15s ease; font-weight:600; }
button.btn.primary{ background:var(--brand); border-color:#19824f; color:#fff; }
button.btn.ghost{ background:transparent; }
button.btn:disabled{ opacity:.6; cursor:not-allowed; }
input[type="file"]{ display:none; }

.kbd{ font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background:#fff; border:1px solid var(--line); border-radius:6px; padding:2px 6px; }
.grid{ display:grid; grid-template-columns: 1fr 1fr; gap:14px; }
.mono{ font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; color:#0f1720; }
.small{ font-size:13px; color:var(--muted); }

ul.inline{ list-style:none; margin:8px 0 0; padding:0; display:flex; gap:10px; flex-wrap:wrap; }
.pill{ border:1px solid var(--line); background:var(--pill); padding:6px 10px; border-radius:999px; font-size:12px; }
.ok{ color:var(--ok); }
.miss{ color:var(--miss); }

.log{ background:#fff; border:1px solid var(--line); border-radius:8px; padding:10px; height:200px; overflow:auto; }
details{ border:1px solid var(--line); border-radius:10px; padding:8px 10px; background:#fff; }
details > summary{ cursor:pointer; font-weight:600; }
.right{ margin-left:auto; }
.muted{ color:var(--muted); }
.badge{ font-size:12px; padding:4px 8px; border-radius:999px; border:1px solid var(--line); background:#fff; }

.step{ display:flex; align-items:center; gap:10px; margin:0 0 8px; }
.num{ width:28px; height:28px; border-radius:50%; background:var(--brand); color:#fff; display:inline-flex; align-items:center; justify-content:center; font-weight:700; }
.title{ font-weight:700; }
a{ color:var(--accent); text-decoration:none; }
