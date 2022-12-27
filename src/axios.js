import axios from 'axios'
import {baseUrl} from './constants/constatnts' //importing a named export

// creating an instance we get this from npm module
const instance = axios.create({
    baseURL: baseUrl
  });

  export default instance