import server from './server'

class UserService {
    async getCandidate(id) {
        let user = await server.get('/students/'+id)
        return user.data
    }
}

export default new UserService()