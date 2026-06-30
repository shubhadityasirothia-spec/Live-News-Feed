import {
    addBookmark
}
from "../features/bookmarks.js";

const newsGrid = document.getElementById("newsGrid");

export function renderNews(articles) {

    newsGrid.innerHTML = "";

    if (!articles || articles.length === 0) {

        newsGrid.innerHTML = `

        <div class="widget">

            <h3>No News Found</h3>

        </div>

        `;

        return;

    }

    articles.forEach(article => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

        <img
        src="${article.image || 'https://picsum.photos/500/300'}"
        alt="${article.title}"
        onerror="this.src='https://picsum.photos/500/300'">

        <div class="card-content">

            <h3>${article.title}</h3>

            <p>
                ${article.description || "No description available"}
            </p>

            <div class="card-footer">

                <span>
                    ${article.source?.name || "Unknown"}
                </span>

                <span>
                    ${new Date(
                        article.publishedAt
                    ).toLocaleDateString()}
                </span>

            </div>

            <button
            class="read-btn"
            data-url="${article.url}">

            Read More

            </button>

            <button
            class="bookmark-btn">

            Bookmark

            </button>

        </div>

        `;

        card
            .querySelector(".read-btn")
            .addEventListener("click", () => {

                window.open(
                    article.url,
                    "_blank"
                );

            });

        card
            .querySelector(".bookmark-btn")
            .addEventListener("click", () => {

                addBookmark(article);

            });

        newsGrid.appendChild(card);

    });

}