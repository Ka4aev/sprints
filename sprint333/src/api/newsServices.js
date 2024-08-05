import axios from 'axios';

export const NewsServices  = {
    async getIndexNews () {
        let response
            try {
                response = (await axios.get(`${import.meta.env.VITE_API_URL}/newstories.json`)).data
            } catch (error){
                console.log(error)
            }
        return response
    },
    async getNews (data) {

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/item/${data}.json`)

        return response.data;
    }
}



