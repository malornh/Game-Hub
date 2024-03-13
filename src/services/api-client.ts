import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6c34edcdc2414df49247081f1cd5b360'
    }
})

