import axios from 'axios';
export default {
    baseURL: 'https://newsapi.org',
    request: async (options) => {
        const response = await axios(options)

        return response
    }
}