const BASE_URL = "https://portfolio.slavagm.ru/api";

/**
 *
 * @param {string} method
 * @param isFormData
 * @returns {{method}}
 */

const createRequestConfig = (method, isFormData = false) => {
    const token = localStorage.getItem("accessToken");
    const config = {
        method: method,
        headers: {}
    }
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    if (!isFormData) {
        config.headers = {
            ...config.headers,
            "Content-Type": "application/json"
        };
    }

    return config;
}

export {BASE_URL, createRequestConfig};