import axiosInstance from "../http";
export async function fetchContracts() {
    try {
        let url = "/special/db";
        let res = await axiosInstance.get(url);
        return res.data.contracts;
    } catch (error) {
        return error;
    }
}
