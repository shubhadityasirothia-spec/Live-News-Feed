import {
    API_KEY
}
from "../config.js";

const BASE_URL = "https://gnews.io/api/v4";

export async function getTopNews(category = "general") {

    try {

        const response = await fetch(
            `${BASE_URL}/top-headlines?category=${category}&lang=en&max=50&apikey=${API_KEY}`
        );

        if (!response.ok) {

            switch (response.status) {

                case 401:
                    throw new Error("Invalid API Key");

                case 403:
                    throw new Error("Access Forbidden");

                case 429:
                    throw new Error("API Rate Limit Exceeded");

                case 500:
                    throw new Error("Server Error");

                default:
                    throw new Error("Unable to fetch news");

            }

        }

        return await response.json();

    }

    catch (error) {

        throw error;

    }

}

export async function searchNewsAPI(query) {

    try {

        const response = await fetch(
            `${BASE_URL}/search?q=${encodeURIComponent(query)}&lang=en&max=50&apikey=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("Search failed");
        }

        return await response.json();

    }

    catch (error) {

        throw error;

    }

}