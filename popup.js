// document.getElementById("clearCookies").addEventListener("click", async () => {
//   const cookies = await chrome.cookies.getAll({});
//   cookies.forEach(cookie => {
//     const url = `http${cookie.secure ? 's' : ''}://${cookie.domain}${cookie.path}`;
//     chrome.cookies.remove({
//       url: url,
//       name: cookie.name
//     });
//   });

//   document.getElementById("status").innerText = `${cookies.length} cookie(s) limpo(s) com sucesso!`;
// });

document.getElementById("clearCookies").addEventListener("click", async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
    if (tabs.length === 0) {
      document.getElementById("status").innerText =
        "Erro: Não foi possível identificar a aba ativa.";
      return;
    }
    const tab = tabs[0];
    const url = new URL(tab.url);
    const domain = url.hostname;
    const cookies = await chrome.cookies.getAll({ domain });
    if (cookies.length === 0) {
      document.getElementById("status").innerText =
        "Nenhum cookie encontrado para este domínio.";
      return;
    }
    cookies.forEach((cookie) => {
      const cookieUrl = `http${cookie.secure ? "s" : ""}://${cookie.domain}${
        cookie.path
      }`;
      chrome.cookies.remove({
        url: cookieUrl,
        name: cookie.name,
      });
    });
    document.getElementById("status").innerText =
      "Cookies do domínio limpos com sucesso!";
  });
});
