import axios from "axios";

const KEY='AIzaSyBI5p_FrmfZEjXrmtvbXJlDbwEg7LogXms';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});