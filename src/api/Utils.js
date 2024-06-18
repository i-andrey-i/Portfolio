import {subscribeProfile, unsubscribeProfile} from "./ProfileApi";
import {likeProject, unlikeProject} from "./ProjectApi";

export const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    window.location.reload(); // TODO: Может быть придумать чета получше
}

export const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
};

export const isAuthorised = () => {
    const userId = localStorage.getItem("userId");
    return userId && userId !== "undefined";
};

export const toggleSubscription = (isSubscribed, userId, setter) => {
    if (!isAuthorised())
        return;
    if (isSubscribed) {
        unsubscribeProfile(userId)
            .then(data => setter(data))
            .catch(error => console.log(error));
    } else {
        subscribeProfile(userId)
            .then(data => setter(data))
            .catch(error => console.log(error));
    }
};

export const toggleLike = (isLiked, projectId, setter) => {
    if (!isAuthorised())
        return;
    if (isLiked) {
        unlikeProject(projectId)
            .then(data => setter(data))
            .catch(error => console.log(error));
    } else {
        likeProject(projectId)
            .then(data => setter(data))
            .catch(error => console.log(error));
    }
}