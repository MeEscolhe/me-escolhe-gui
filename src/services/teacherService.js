import server from './server'

class TeacherService {

    async post(body){
        console.log(body)
        try {
            await server.post('/teachers', body).then(res => {
                console.log(res)
                return res
              })
        } catch (error) {
            return []
        }        
    }   

    async getById(id) {
        try {
            const res = await server.get('/teachers/'+id)
            console.log(res.data)
            return res.data
        } catch (error) {
            return []
        }        
    }

    async getSelections(idRecruiter) {
        try {
            const res = await server.get('/teachers/'+idRecruiter+'/selections')
            console.log(res.data)
            return res.data
        } catch (error) {
            return []
        }        
    }
}

export default new TeacherService()