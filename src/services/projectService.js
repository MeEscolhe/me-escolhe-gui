import server from './server'

class ProjectService {

    async getAll() {
        let projects = await server.get('/projects ')
        return projects.data
    }

    async get(id) {
        let project = await server.get(`/projects/${id}`)
        return project.data
    }

    async createProject({name, description, labId}) {
        const project = {
            name,
            description,
            labId,
            Selections: []
        }
        let res = await server.post(`/projects`, project)

        if (res.status != 200) {
            console.error("Um problema ocorreu ao cadastrar um projeto!!")
            return 1
        } 
        console.info("Projeto cadastrado com sucesso!")
        return 0
    }

    async addSelection(id, projectId) {
        let ids = (Array.isArray(id)) ? id : [id]
        let project = await this.get(projectId).data
        let selections = project.selections
        ids = ids.filter(id => !selections.includes(id))
        
        if (ids.length === 0) return 1
        project.selections = selections.concat(ids)
        let res = await server.post(`/project/${projectId}`, project)
        if (res.status != 200) {
            console.error("Um problema ocorreu ao adicionar as selecao!!")
            return 1
        } 
        console.info("Seleção adicionada com sucesso!")
        return 0
    }
}

export default new ProjectService()