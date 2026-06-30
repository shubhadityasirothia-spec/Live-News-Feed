import { getTopNews }
from "./api/newsApi.js";

import { renderNews }
from "./ui/renderNews.js";

import {
    showSpinner,
    hideSpinner
}
from "./ui/spinner.js";

import {
    showError,
    hideError,
    attachRetry
}
from "./ui/errorHandler.js";

import {
    initializeSearch
}
from "./features/search.js";

import {
    initializeCategories,
    loadCategory
}
from "./features/categoryFilter.js";

import {
    initializeBookmarks
}
from "./features/bookmarks.js";

import {
    paginateData,
    createPagination,
    resetPagination
}
from "./ui/pagination.js";

let allArticles = [];

async function initializeApp() {

    try {

        hideError();

        showSpinner();

        initializeSearch();

        initializeCategories();

        initializeBookmarks();

        await loadInitialNews();

        attachRetry(
            loadInitialNews
        );

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

async function loadInitialNews() {

    try {

        hideError();

        showSpinner();

        resetPagination();

        const data =
            await getTopNews(
                "general"
            );

        allArticles =
            data.articles || [];

        updatePage();

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

function updatePage() {

    const pageArticles =
        paginateData(
            allArticles
        );

    renderNews(
        pageArticles
    );

    createPagination(
        allArticles,
        updatePage
    );

}

document
    .getElementById(
        "exploreBtn"
    )
    ?.addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "newsGrid"
                )
                .scrollIntoView({
                    behavior:
                        "smooth"
                });

        }
    );

initializeApp();