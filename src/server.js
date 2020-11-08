import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export const getLabs = () => {
    return axios.get("/labs")
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        return err
    })
}

export const getProjects = () => {
    return axios.get("/projects")
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        return err
    })
}

export const getSelections = () => {
    return axios.get("/selections")
    .then(res => {
        console.log(res)
    }).catch(err => {
        return err
    })
}

