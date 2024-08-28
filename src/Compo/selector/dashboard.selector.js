import { selector } from "recoil";

export const apiSelector = selector({
    key: 'apiSelector',
    get: async () => {
        try {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };
            
            const response = await fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
            const result = await response.json();
                return result;
        } catch (error) {
            console.log(error);
        }
    }
}) 