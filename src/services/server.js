import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:8080/",//"http://me-escolhe-back.herokuapp.com/",
    responseType: "json",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

