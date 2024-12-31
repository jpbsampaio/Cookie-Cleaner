document.getElementById("clearCookies").addEventListener("click", async () => {
    const cookies = await chrome.cookies.getAll({});
    cookies.forEach(cookie => {
      const url = `http${cookie.secure ? 's' : ''}://${cookie.domain}${cookie.path}`;
      chrome.cookies.remove({
        url: url,
        name: cookie.name
      });
    });
  
    document.getElementById("status").innerText = "Cookies limpos com sucesso!";
  });
  