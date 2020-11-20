import server from './services/server'

class Auth {
    constructor() {
        this.authenticated = false
        this.typeUser = null
        this.userID = null
        this.route = null
    }
    
    async login(user, typeUser, cb){
        this.typeUser = typeUser
        if(this.typeUser === "CANDIDATE"){
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
        console.log(users)
        let _user = users.data.filter(({email, password}) => {
            return user.email ===  email && user.password === password        
        });

        if(_user) {
            this.authenticated = true
            this.userID = _user._id
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