import server from './server'

class ProjectService {
    async getProject(id) {
        try {
            let res = await server.get('/projects/' + id)
            return res.data
        } catch (error) {
            return []
        }
    }


}

export default new ProjectService()