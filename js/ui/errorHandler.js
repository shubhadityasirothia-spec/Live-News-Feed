const errorBox = document.getElementById("error");

const errorText = document.getElementById("errorText");

export function showError(message) {

    errorText.textContent = message;

    errorBox.classList.remove("hidden");

}

export function hideError() {

    errorBox.classList.add("hidden");

}

export function attachRetry(callback) {

    const retryBtn =
        document.getElementById("retryBtn");

    retryBtn.addEventListener(
        "click",
        callback
    );

}