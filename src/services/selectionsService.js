import server from './server'

class SelectionService {
    async getAll(page, limit) {
        if (page === null) page = 1
        if (limit === null) limit = 10
        let selections = await server.get('/selections?page='+page+'&limit='+limit)
        return selections.data
    }

    async getSelection(id) {
        if (id === null) return
        let selection = await server.get('/selections/'+id)
        console.log(selection)
        return selection.data
    }

    async getCandidates(id) {
        const { phases } = this.getSelection(id)
        const phaseId = phases[0]
        const { registrations } = await server.get(`/phases/${phaseId}`)
        const students = await server.get(`/students`)
        let res = []
        students.map(student => {
            const { registration } = student
            if (registration in registrations) {
                res.join(student)
            }
        })
        return res
    }
}

export default SelectionService