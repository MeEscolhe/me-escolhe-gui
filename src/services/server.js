import axios from 'axios'

export default axios.create({
    baseURL: "http://me-escolhe-back.herokuapp.com/",
    responseType: "json",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

