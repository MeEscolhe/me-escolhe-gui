import server from './server'

class PhasesService {

    async getPhase(id) {
        let phases = await server.get(`/phases/`+id)
        return phases.data
    }

    async getCandidates(id) {
        let phases = await server.get(`/phases/`+id)
        return phases.data.students
    }

    async registrationPhase(phaseID, studentID) {
        console.log(phaseID)
        try{
            const res = await server.post(`/phases/`+phaseID+`/student/`+studentID)
            console.log(res)
            return 200
        }catch(e){
            return 400
        }

    }
}

export default new PhasesService()