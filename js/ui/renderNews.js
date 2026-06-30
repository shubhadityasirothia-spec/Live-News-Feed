// Imports removed for global scripting

const newsGrid = document.getElementById("newsGrid");

function renderNews(articles) {

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

        // Make the entire card clickable to open the article
        card.addEventListener("click", (event) => {
            // Prevent opening the link if the user is bookmarking
            if (event.target.classList.contains("bookmark-btn")) {
                return;
            }
            window.open(article.url, "_blank");
        });

        card
            .querySelector(".bookmark-btn")
            .addEventListener("click", () => {

                addBookmark(article);

            });

        newsGrid.appendChild(card);

    });

}
