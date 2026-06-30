const loader = document.getElementById("loader");

export function showSpinner() {

    loader.classList.remove("hidden");

}

export function hideSpinner() {

    loader.classList.add("hidden");

}