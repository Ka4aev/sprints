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
// const refka = ref();
//
// const newsIndex = NewsServices.getIndexNews()
//     .then(data => refka.value = data)
//     .catch(error => console.log(error));
//
//
// export const post = NewsServices.getNews(8863)
//     .then(data => refka.value = data)
//     .catch(error => console.log(error));


