import {
    saveBookmarks,
    getBookmarks
}
from "../storage/localStorage.js";

let bookmarks =
    getBookmarks();

updateBookmarkCounter();

export function addBookmark(
    article
) {

    const exists =
        bookmarks.some(
            item =>
                item.url ===
                article.url
        );

    if (exists) {

        alert(
            "Already bookmarked"
        );

        return;

    }

    bookmarks.push(article);

    saveBookmarks(
        bookmarks
    );

    updateBookmarkCounter();

    alert(
        "Article Bookmarked"
    );

}

export function removeBookmark(
    url
) {

    bookmarks =
        bookmarks.filter(
            article =>
                article.url !==
                url
        );

    saveBookmarks(
        bookmarks
    );

    updateBookmarkCounter();

}

export function getAllBookmarks() {

    return bookmarks;

}

function updateBookmarkCounter() {

    const counter =
        document.getElementById(
            "bookmarkCount"
        );

    if (!counter) return;

    counter.textContent =
        `${bookmarks.length} Bookmarks`;

}

export function initializeBookmarks() {

    updateBookmarkCounter();

}