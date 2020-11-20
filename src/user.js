class User {
    constructor() {
        this.email = ''
        this.password = ''
        this.id = ''
        this.type = ''
    }

    createUser(email, password, type) {
        this.email = email
        this.password = password
        this.type = type
    }

    getEmail() {
        return this.email
    }

    setEmail(email) {
        this.email = email
    }

    getPassword() {
        return this.password
    }

    setPassword(password) {
        this.password = password
    }

    getID() {
        return this.id
    }

    setID(id) {
        this.id = id
    }

    getType() {
        return this.type
    }

    setType(type) {
        this.type = type
    }
}

export default new User()