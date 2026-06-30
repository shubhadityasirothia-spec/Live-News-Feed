let categoryArticles = [];
let currentCategory = "general";

function initializeCategories() {
    const buttons = document.querySelectorAll(".categories button");

    // Set default active category button styling on load
    updateActiveCategoryButton("general");

    buttons.forEach(button => {
        button.addEventListener("click", async () => {
            currentCategory = button.dataset.category;
            updateActiveCategoryButton(currentCategory);
            await loadCategory(currentCategory);
        });
    });
}

function updateActiveCategoryButton(category) {
    const buttons = document.querySelectorAll(".categories button");
    buttons.forEach(button => {
        if (button.dataset.category === category) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}

async function loadCategory(category) {
    try {
        hideError();
        showSpinner();
        resetPagination();

        const data = await getTopNews(category);
        categoryArticles = data.articles || [];
        updateCategoryPage();
    } catch (error) {
        showError(error.message);
    } finally {
        hideSpinner();
    }
}

function updateCategoryPage() {
    const pageData = paginateData(categoryArticles);
    renderNews(pageData);
    createPagination(categoryArticles, updateCategoryPage);
}
