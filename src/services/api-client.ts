import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e84c7f8ba2824b9d84ed9a90e3aedc2f'
    }
})

