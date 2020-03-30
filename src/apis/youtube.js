import axios from 'axios';

const KEY = 'AIzaSyCsLiWGmWY-umKVuVn95JNs2BQ6NaotD8A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
});

