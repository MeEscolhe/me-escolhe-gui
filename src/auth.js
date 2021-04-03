import server from './services/server'

import user from './user'

class Auth {
    constructor() {
        this.authenticated = false
        this.route = null
        this.authenticated = false
    }

    async login(body, cb) {
        try {
            const { status, data } = await server.post('/auth', body)
            console.log(data);
            if (status === 200) {
                localStorage.getItem('@me-escolhe/tokenUser')
                localStorage.setItem('@me-escolhe/tokenUser', data.token)
                user.createUser(data.user, data.isTeacher)
            }
            return status
        } catch (error) {
            return error
        }
    }

    logout(cb) {
        this.authenticated = false
        this.typeUser = null
        this.userID = null
        this.route = null
        cb()
    }

    isAuthenticated() {
        const res = localStorage.getItem('@me-escolhe/tokenUser') !== (null || undefined)
        console.log(res);
        return res
    }
}

export default new Auth()