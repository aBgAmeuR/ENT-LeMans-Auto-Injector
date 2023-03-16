const inputRecherche = document.querySelector("#rechercher");
const inputIdentifiant = document.querySelector("#identifiant");
const inputPassword = document.querySelector("#password");

const key = "key";
chrome.storage.local.get([key], (result) => {
	inputRecherche.value = result.key.Recherche;
	inputIdentifiant.value = result.key.Identifiant;
	inputPassword.value = result.key.Password;
});

document.addEventListener("keyup", () => {
	const valueRecherche = inputRecherche.value;
	const valueIdentifiant = inputIdentifiant.value;
	const valuePassword = inputPassword.value;

	const value = { Recherche: valueRecherche, Identifiant: valueIdentifiant, Password: valuePassword };
	chrome.storage.local.set({ key: value });
});
