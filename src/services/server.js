import axios from 'axios'

const PRD = "http://me-escolhe-back.herokuapp.com/"
const LOCAL = "http://localhost:8080/"
export default axios.create({
    baseURL: PRD,
    responseType: "json",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

