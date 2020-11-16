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
}

export default SelectionService