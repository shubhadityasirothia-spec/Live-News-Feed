const STORAGE_KEY = "newspulse_bookmarks";

function saveBookmarks(bookmarks) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(bookmarks)
        );

    }

    catch (error) {

        console.error(
            "Error saving bookmarks",
            error
        );

    }

}

function getBookmarks() {

    try {

        const bookmarks =
            localStorage.getItem(
                STORAGE_KEY
            );

        return bookmarks
            ? JSON.parse(bookmarks)
            : [];

    }

    catch (error) {

        console.error(
            "Error loading bookmarks",
            error
        );

        return [];

    }

}

function clearBookmarks() {

    localStorage.removeItem(
        STORAGE_KEY
    );

}
