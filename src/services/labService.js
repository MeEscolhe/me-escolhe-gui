import server from './server'

class LabService {

    async get() {
        console.log("LAB")
        let labs = await server.get('/labs')
        console.log(labs)
        return labs.data
    }
}

export default new LabService()