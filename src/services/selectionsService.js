import server from './server'

class SelectionService {
    async getAll(page, limit) {
        if (page === null) page = 1
        if (limit === null) limit = 10
        let selections = await server.get('/selections?page='+{page}+'&limit='+{limit})
        return selections.data.docs
    }
}

export default SelectionService