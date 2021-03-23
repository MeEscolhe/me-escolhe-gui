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

        return this.user ?
            this.isTeacher ? this.user._id : this.user.registration
            : undefined
    }

    isRecruiter() {
        console.log("Is recruiter"+this.isTeacher);
        return this.isTeacher
    }
}

export default new User()

