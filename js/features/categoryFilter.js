import { getTopNews }
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

let categoryArticles = [];

let currentCategory =
    "general";

export function initializeCategories() {

    const buttons =
        document.querySelectorAll(
            ".categories button"
        );

    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                async () => {

                    currentCategory =
                        button.dataset
                        .category;

                    await loadCategory(
                        currentCategory
                    );

                }
            );

        }
    );

}

export async function loadCategory(
    category
) {

    try {

        hideError();

        showSpinner();

        resetPagination();

        const data =
            await getTopNews(
                category
            );

        categoryArticles =
            data.articles || [];

        updateCategoryPage();

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

function updateCategoryPage() {

    const pageData =
        paginateData(
            categoryArticles
        );

    renderNews(pageData);

    createPagination(
        categoryArticles,
        updateCategoryPage
    );

}