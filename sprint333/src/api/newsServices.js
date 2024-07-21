import axios from 'axios';

export const NewsServices  = {
    async getIndexNews () {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/newstories.json`)

        return response.data;
    },
    async getNews (data) {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/item/${data}.json`)

        return response.data;
    }
}



