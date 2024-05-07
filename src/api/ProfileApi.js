import {BASE_URL, createRequestConfig} from "./BaseApi";

export const getProfile = (id) => {
    return fetch(`${BASE_URL}/profiles/${id}`, {
        ...createRequestConfig("GET")
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}

export const createProfile = (name, education, description, phone_number, email) => {
    return fetch(`${BASE_URL}/profiles/create`, {
        ...createRequestConfig("POST"),
        body: JSON.stringify({name, education, description, phone_number, email})
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}