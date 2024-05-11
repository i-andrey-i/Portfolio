import {BASE_URL, createRequestConfig} from "./BaseApi";

export const getProject = (id) => {
    return fetch(`${BASE_URL}/projects/get_by_id/${id}`, {
        ...createRequestConfig("GET")
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}

export const getUserProjects = (id) => {
    return fetch(`${BASE_URL}/projects/get_by_user/${id}`, {
        ...createRequestConfig("GET")
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}

export const getProjects = (offset = 0, limit = 10) => {
    return fetch(`${BASE_URL}/projects/all?limit=${limit}&offset=${offset}`, {
        ...createRequestConfig("GET")
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}

export const getNewestProjects = (offset = 0, limit = 10) => {
    return fetch(`${BASE_URL}/projects/newest?limit=${limit}&offset=${offset}`, {
        ...createRequestConfig("GET")
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}