import server from './server'

class UserService {
    async getCandidate(id) {
        try {
            let res = await server.get('/students/'+id)
            return res.data
        } catch (error) {
            return []
        }        
    }

    async postCandidate(body) {
        try {
            let res = await server({method: 'post', url:'/students', data: body})
            return res
        } catch (error) {
            return []
        }        
    }
}

export default new UserService()