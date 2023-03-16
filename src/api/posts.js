import axiosInstance from "../http";
export async function fetchPosts() {
    try {
        let url = "/posts";
        let res = await axiosInstance.get(url);
        return res.data;
    } catch (error) {
        return error;
    }
}
