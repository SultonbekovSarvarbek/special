import axiosInstance from "../http";
export async function fetchContracts() {
    try {
        let url = "/special/contracts";
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
            url: "/special/contracts",
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
