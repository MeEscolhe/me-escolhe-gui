import server from './services/server'
import user from './user'

class Auth {
    constructor() {
        this.authenticated = false
        this.route = null
    }
    
    async login(_user, typeUser, cb){
        user.createUser(_user.email, _user.password, typeUser)
        
        if(user.getType() === "CANDIDATE"){
            this.route = 'students/'
        } else {
            this.route = 'teachers/'
        }
        let users = null
        
        try {
            users = await server.get(this.route)

        } catch(e) {
            return
        }

        let userAccount = users.data.filter(({email, password}) => user.getEmail() ===  email && user.getPassword() === password);

        if(userAccount.length > 0) {
            this.authenticated = true
            user.setID(userAccount[0]._id)
            cb()
        }
        
    }

    getUserType(){
        return this.typeUser
    }

    getUserId() {
        return this.userID
    }

    logout(cb) {
        this.authenticated = false
        this.typeUser = null
        this.userID = null
        this.route = null
        cb()
    }

    isAuthenticated() {
        return this.authenticated
    }

}

export default new Auth()