import server from './server'

class UserService {
    async getCandidate(id) {
        try {
            let res = await server.get('/students/' + id)
            return res.data
        } catch (error) {
            return []
        }
    }

    async postCandidate(body) {
        try {
            return await server.post('/students', body)
        } catch (error) {
            return error
        }
    }
    updateCandidate = async (body) => {

        try {
            const req = await server.put('/students/' + body.registration, body);
            return { data: req.data, error: false };
        } catch (error) {
            return { data: error.response.data, error: true };
        }
    }

    /**
     * validate if student is in selection
     * @param {string} registration 
     * @param {string} selectionId 
     * @returns {boolean}
     */
    getCandidateIsInSelection = async (registration, selectionId) =>
        await server.get(`/students/isInSelection/?registration=${registration}&selectionId=${selectionId}`);


}

export default new UserService()