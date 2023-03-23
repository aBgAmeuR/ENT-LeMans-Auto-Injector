// Get The URL
const site = window.location.hostname;

if (site.includes("planning.univ-lemans.fr")) {
  const key = "key";
  chrome.storage.local.get([key], (result) => {
    var counter = 0;

    setInterval(() => {
      counter++;
      if (counter >= 100) clearInterval();
      const inputText = document.querySelector("#x-auto-38-input");
      if (!inputText || !result.key.Recherche) return;
      if (inputText.value === "") {
        inputText.value = result.key.Recherche;

        const btn = document
          .querySelector("#x-auto-40")
          .querySelector("button");
        btn.click();
      }
    }, 100);
  });
}

if (site.includes("cas.univ-lemans.fr")) {
  const key = "key";
  chrome.storage.local.get([key], (result) => {
    var counter = 0;

    setInterval(() => {
      counter++;
      if (counter >= 100) clearInterval();
      const btn = document.querySelector('button[type="submit"]');
      const inputId = document.querySelector("#username");
      const inputPassword = document.querySelector("#password");

      if (!btn || !inputId || !inputPassword || !result.key.Identifiant || !result.key.Password) return;

      inputId.value = result.key.Identifiant;
      inputPassword.value = result.key.Password;

      btn.click();
    }, 100);
  });
}
