class User {
    constructor() {
        this.user = null;
        this.isTeacher = false;
        this.isStudent = false;
    }

    createUser(user, isTeacher) {
        this.user = user;
        this.isTeacher = isTeacher;
        this.isStudent = !isTeacher;
    }

    getEmail() {
        return this.user.email
    }

    isCandidate() {
        return this.isStudent
    }

    getID() {
        console.log(this.user);
        return this.user ? this.user.registration : undefined
    }

    isRecruiter() {
        return this.isTeacher
    }
}

export default new User()

