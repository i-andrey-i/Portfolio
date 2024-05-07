const BASE_URL = "https://portfolio.slavagm.ru/api";

/**
 *
 * @param {string} method
 * @returns {{method}}
 */

const createRequestConfig = (method) => {
    const token = localStorage.getItem("accessToken");
    const config = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    }
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}

export {BASE_URL, createRequestConfig};