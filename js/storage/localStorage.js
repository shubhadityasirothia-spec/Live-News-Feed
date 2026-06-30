const STORAGE_KEY = "newspulse_bookmarks";

export function saveBookmarks(bookmarks) {

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

export function getBookmarks() {

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

export function clearBookmarks() {

    localStorage.removeItem(
        STORAGE_KEY
    );

}