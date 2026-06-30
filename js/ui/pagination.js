let currentPage = 1;

const articlesPerPage = 9;

export function paginateData(data) {

    const start =
        (currentPage - 1) * articlesPerPage;

    const end =
        start + articlesPerPage;

    return data.slice(start, end);

}

export function createPagination(
    articles,
    callback
) {

    const pagination =
        document.getElementById(
            "pagination"
        );

    pagination.innerHTML = "";

    const totalPages = Math.ceil(
        articles.length / articlesPerPage
    );

    for (
        let i = 1;
        i <= totalPages;
        i++
    ) {

        const button =
            document.createElement(
                "button"
            );

        button.textContent = i;

        if (i === currentPage) {

            button.classList.add(
                "active"
            );

        }

        button.addEventListener(
            "click",
            () => {

                currentPage = i;

                callback();

            }
        );

        pagination.appendChild(
            button
        );

    }

}

export function resetPagination() {

    currentPage = 1;

}

export function getCurrentPage() {

    return currentPage;

}