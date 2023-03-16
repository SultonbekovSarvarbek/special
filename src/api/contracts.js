import axiosInstance from "../http";
export async function fetchUsers() {
    try {
        let url = "/special/db";
        let res = await axiosInstance.get(url);
        console.log(res);
        return res.data;
    } catch (error) {
        return error;
    }
}
