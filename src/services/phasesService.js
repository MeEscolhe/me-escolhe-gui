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
        let phase = await server.get(`/phases/`+phaseID)
        
        console.log("ANtes: "+phase)
        phase = phase.data
        const students = phase.students.push(studentID)
        const body = {
            "students": students,
            "description": phase.description,
            "_id": phase._id,
            "selectionId": phase.selectionId,
            "__v": phase.__v
        }
        try{
            const res = await server.put(`/phases/`+phaseID, body)
            console.log(res)
        }catch(e){
            console.log(e)
        }
        console.log(await server.get(`/phases/`+phaseID))


    }
}

export default new PhasesService()