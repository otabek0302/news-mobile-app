import { create } from 'apisauce'


const api = create({
    baseURL: 'https://newsapi.org/v2',
})

const apiKey = '?country=us&apiKey=efdf5f219c76417ab4b0c87bbb255609'
const getTopHeadLines = api.get('/top-headlines' + apiKey)

const getNewsByCategory = (category: string) => {
    return api.get('/top-headlines' + apiKey + '&category=' + category.toLowerCase())
}

export default {
    getTopHeadLines,
    getNewsByCategory
}