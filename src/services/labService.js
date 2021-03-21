import server from './server'

class LabService {

    async get() {
        console.log("LAB")
        let labs = await server.get('/labs')
        console.log(labs)
        return labs.data
    }

    async getLab(id) {
        const lab = await server.get(`/labs/${id}`);
        console.log(`/labs/${id}`);

        return lab.data;
    }
}

export default new LabService()