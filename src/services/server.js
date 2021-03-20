import axios from 'axios'

const PRD = "https://me-escolhe-back.herokuapp.com/"
const LOCAL = "https://localhost:8080/"

export default axios.create({
    baseURL: PRD,
    responseType: "json",
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    }
})

