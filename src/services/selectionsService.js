import server from './server'

class SelectionService {
    async getAll() {
        let selections = await server.get('/selections')
        return selections.data.docs
    }
}

export default SelectionService