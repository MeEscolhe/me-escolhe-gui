import server from './server'

class SelectionService {

    async getOpenSelections(page, limit) {
        if (page === null) page = 1
        if (limit === null) limit = 10
        try {
            let selections = await server.get('/selections?page='+page+'&limit='+limit)
            return selections.data.filter(({current}) => current)
        } catch(e) {
            return e
        }
        
    }

    async getCloseSelections(page, limit) {
        if (page === null) page = 1
        if (limit === null) limit = 10
        try {
            let selections = await server.get('/selections?page='+page+'&limit='+limit)
            return selections.data.filter(({current}) => !current)
        } catch(e) {
            return e
        }
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
                res.push(student)
            }
        })
        return res
    }
}

export default new SelectionService()