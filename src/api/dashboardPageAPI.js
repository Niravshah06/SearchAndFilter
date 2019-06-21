import api from '../apiConfig'


export async function fetchArticles (value) {
  const API_KEY='63f77df92727490da879aa354bd88ed8';
    const response = await api.request({
      method: 'get',
      baseURL: api.baseURL,
      url: `/v2/top-headlines?q=${value}&apiKey=${API_KEY}`,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    })
    return response.data
  }