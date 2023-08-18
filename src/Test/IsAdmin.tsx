export const IsAdmin = () => {
    return localStorage.getItem("admin") == "true";
}