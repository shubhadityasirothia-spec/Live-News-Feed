import { searchNewsAPI }
from "../api/newsApi.js";

import { renderNews }
from "../ui/renderNews.js";

import {
    showSpinner,
    hideSpinner
}
from "../ui/spinner.js";

import {
    showError,
    hideError
}
from "../ui/errorHandler.js";

import {
    paginateData,
    createPagination,
    resetPagination
}
from "../ui/pagination.js";

let searchResults = [];

export function initializeSearch() {

    const searchBtn =
        document.getElementById(
            "searchBtn"
        );

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    searchBtn.addEventListener(
        "click",
        handleSearch
    );

    searchInput.addEventListener(
        "keypress",
        (event) => {

            if (event.key === "Enter") {

                handleSearch();

            }

        }
    );

}

async function handleSearch() {

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const query =
        searchInput.value.trim();

    if (!query) {

        showError(
            "Please enter a search term."
        );

        return;

    }

    try {

        hideError();

        showSpinner();

        resetPagination();

        const data =
            await searchNewsAPI(
                query
            );

        searchResults =
            data.articles || [];

        updateSearchPage();

    }

    catch (error) {

        showError(
            error.message
        );

    }

    finally {

        hideSpinner();

    }

}

function updateSearchPage() {

    const pageData =
        paginateData(
            searchResults
        );

    renderNews(pageData);

    createPagination(
        searchResults,
        updateSearchPage
    );

}