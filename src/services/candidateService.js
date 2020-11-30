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
        console.log(body)
        try {
            await server.post('/students', body).then(res => {
                console.log(res)
                return res
              })
        } catch (error) {
            return []
        }        
    }
}

export default new UserService()