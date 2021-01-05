import axios from 'axios';

const instance = axios.create({
  //API URL
  baseUrl:
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=cdb1b0f5c10b498ab9bff1ed7e1b63bb',
});

export default instance;
