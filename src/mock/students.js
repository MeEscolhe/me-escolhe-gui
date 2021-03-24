import mock from './students.json'

const get = () => {
    return {status: 200, data: mock}
}

const getByEmail = (email) => {
    const student = mock.map(std => std.email === email)
    if(student) return {status: 200, data: student}
    return {status: 200, data: {}}
}

const getById = (id) => {
    const student = mock.map(std => std.id === id)
    if(student) return {status: 200, data: student}
    return {status: 200, data: {}}
}

const post = (body) => {
    const id = mock.length
    body.id = id.toString()
    body.skills= {

    }
    body.experience = {

    }
    body.description = ''
    mock.push(body)
    return {status: 200, data: {message: 'Criado com sucesso'}}
}

const put = (body) => {}

export const students = {
    get: get,
    getByEmail: getByEmail,
    getById: getById, 
    post: post,
    put: put,
}