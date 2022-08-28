import axios from 'axios';

const headers = {
    'X-RapidAPI-Key': 'fff8262f9fmshfbb83b07ce28178p1b2acajsn664632473c8f',
    'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
};

export const apiInstance = axios.create({
    baseURL: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
    headers,
});
