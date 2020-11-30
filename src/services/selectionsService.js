import server from './server'

class SelectionService {

    async getOpenSelections(page, limit) {
        console.log("ALL open")
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
        console.log("CLOSE")

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

    async getSelectionByCandidate(registration) {
        console.log("CANDIDATE")

        try {
            let selections = await server.get('/selections?type=student&id='+registration)
            return selections.data
        } catch(e) {
            return e
        }
    }

    async getSelectionByRecruter(id) {
        console.log("RECRUiTER")
        console.log("ID: " + id)
        try {
            let selections = await server.get('/selections?type=teacher&id='+id)
            return selections.data
        } catch(e) {
            return e
        }
    }

    async post(body) {
        try {
            let res = await server.post('/selections', body)
            return res
        } catch(e) {
            return e
        }

    }

}

export default new SelectionService()