import {BASE_URL, createRequestConfig} from "./BaseApi";

export const getProfile = (id) => {
    return fetch(`${BASE_URL}/profiles/${id}`, {
        ...createRequestConfig("GET")
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}

export const createProfile = ({name, education, description, phone_number, email}) => { // TODO: как в updateProfile
    return fetch(`${BASE_URL}/profiles/create`, {
        ...createRequestConfig("POST"),
        body: JSON.stringify({name, education, description, phone_number, email})
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}

export const updateProfile = ({name, education, description, phone_number, email}) => {
    return fetch(`${BASE_URL}/profiles/update`, {
        ...createRequestConfig("PUT"),
        body: JSON.stringify({name, education, description, phone_number, email})
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}

export const getProfilePicture = (id) => {
    return fetch(`${BASE_URL}/profiles/get_image/${id}`, {
        ...createRequestConfig("GET")
    }).then(response => {
        return response.blob()
    })
        .catch(error => console.error(error));
}

export const updateProfilePicture = (body) => {
    return fetch(`${BASE_URL}/profiles/update_image`, {
        ...createRequestConfig("POST", true),
        body: body
    }).then(response => {
        return response.json()
    })
        .catch(error => console.error(error));
}