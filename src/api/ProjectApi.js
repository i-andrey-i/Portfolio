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

export const likeProject = (project_id) => {
    return fetch(`${BASE_URL}/projects/add_like?project_id=${project_id}`, {
        ...createRequestConfig("POST")
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}

export const unlikeProject = (project_id) => {
    return fetch(`${BASE_URL}/projects/delete_like?project_id=${project_id}`, {
        ...createRequestConfig("DELETE")
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}