import axiosInstance from "../http";
export async function fetchUsers() {
    try {
        let url = "/users";
        let res = await axiosInstance.get(url);
        return res.data;
    } catch (error) {
        return error;
    }
}
