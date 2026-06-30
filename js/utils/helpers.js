export function formatDate(dateString) {

    return new Date(
        dateString
    ).toLocaleDateString();

}

export function truncateText(
    text,
    length = 120
) {

    if (!text) {

        return "";

    }

    if (text.length <= length) {

        return text;

    }

    return (
        text.substring(0, length) +
        "..."
    );

}

export function debounce(
    func,
    delay = 500
) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(
            () => {

                func(...args);

            },
            delay
        );

    };

}