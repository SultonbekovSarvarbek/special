import axiosInstance from "../http";
export async function fetchContracts() {
    try {
        const res = await axiosInstance({
            method: "get",
            url: "/special/contracts",
        });
        return res.data;
    } catch (error) {
        return error;
    }
}
export async function newContract(formData) {
    try {
        await axiosInstance({
            method: "post",
            url: "/special/contracts",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(formData),
        });
    } catch (error) {
        return error;
    }
}
