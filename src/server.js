import axios from 'axios'

export const getLabs = () => {
    return axios.get("/labs").then(res => {
        console.log(res)
    }).catch(err => {
        return err
    })
}

export const getProjects = () => {
    return axios.get("/projects").then(res => {
        console.log(res)
    }).catch(err => {
        return err
    })
}

export const getSelections = () => {
    return axios.get("/selections").then(res => {
        console.log(res)
    }).catch(err => {
        return err
    })
}

