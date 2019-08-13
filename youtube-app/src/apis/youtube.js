import axios from 'axios';
const KEY = "AIzaSyCmW2SdMat6PWyMzcwpeSKXNBcTl4s_sxQ";
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
