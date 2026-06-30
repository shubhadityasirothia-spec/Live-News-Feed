const errorBox = document.getElementById("error");

const errorText = document.getElementById("errorText");

function showError(message) {

    errorText.textContent = message;

    errorBox.classList.remove("hidden");

}

function hideError() {

    errorBox.classList.add("hidden");

}

function attachRetry(callback) {

    const retryBtn =
        document.getElementById("retryBtn");

    retryBtn.addEventListener(
        "click",
        callback
    );

}
