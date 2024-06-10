export const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    window.location.reload(); // TODO: Может быть придумать чета получше
}