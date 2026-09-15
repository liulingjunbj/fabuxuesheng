(() => {
  if (document.querySelector('.demo-return')) return;

  const style = document.createElement('style');
  style.textContent = `
    .demo-return{position:fixed;right:14px;top:50%;z-index:9999;transform:translateY(-50%);display:flex;flex-direction:column;align-items:center;gap:7px;width:48px;padding:11px 8px;border:1px solid rgba(255,255,255,.22);border-radius:15px;background:#14241d;color:#fff!important;text-decoration:none!important;box-shadow:0 14px 38px rgba(15,35,25,.24);font:700 10px/1.25 "Avenir Next","PingFang SC",sans-serif;letter-spacing:.04em;transition:.18s ease}
    .demo-return:hover{transform:translateY(-50%) translateX(-3px);background:#245b43}
    .demo-return-mark{display:grid;place-items:center;width:27px;height:27px;border-radius:9px;background:#77ee8d;color:#12361f;font-size:9px;font-weight:900;letter-spacing:0}
    .demo-return-label{writing-mode:vertical-rl;letter-spacing:.12em}
    @media(max-width:720px){.demo-return{right:12px;top:auto;bottom:12px;transform:none;flex-direction:row;width:auto;padding:8px 11px;border-radius:12px}.demo-return:hover{transform:translateY(-2px)}.demo-return-label{writing-mode:initial;letter-spacing:.04em}}
  `;
  document.head.appendChild(style);

  const link = document.createElement('a');
  link.className = 'demo-return';
  link.href = 'index.html';
  link.setAttribute('aria-label', '返回演示总入口');
  link.innerHTML = '<span class="demo-return-mark">演示</span><span class="demo-return-label">返回总入口</span>';
  document.body.appendChild(link);
})();
