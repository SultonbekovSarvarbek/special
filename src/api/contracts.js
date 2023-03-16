import axiosInstance from "../http";
export async function fetchContracts() {
    try {
        let url = "/special/db";
        let res = await axiosInstance.get(url);
        return res.data;
    } catch (error) {
        return error;
    }
}
export async function newContract(formData) {
    try {
        console.log(formData);
        await axiosInstance({
            method: "post",
            url: "/special/db",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(formData),
        }).then((res) => {
            console.log(res);
        });
    } catch (error) {
        return error;
    }
}
