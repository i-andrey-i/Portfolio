import {BASE_URL, createRequestConfig} from "./BaseApi";

export const registerUser = async (email, password) => {
    return fetch(`${BASE_URL}/auth/register`, {
        ...createRequestConfig("POST"),
        body: JSON.stringify({email, password})
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}

export const authUser = async (email, password) => {
    return fetch(`${BASE_URL}/auth/login`, {
        ...createRequestConfig("POST"),
        body: JSON.stringify({email, password})
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}

export const getMe = async () => {
    return fetch(`${BASE_URL}/auth/me`, {
        ...createRequestConfig("GET")
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}

