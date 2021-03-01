import React, { Component } from 'react'
import { Title, Button} from '../../components/atoms'
import { DataPersonalForm } from '../../components/organisms'
import { Content, Header, Legend } from './styled'

import candidateService from '../../services/candidateService'

class CreateCandidateAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            registration: null,
            email: null,
            password: null,
            confirmPassword: null,
            cra: null   
        }
    }

    addName = (event) => {
        this.setState({name: event.target.value})
    }

    addEmail = (event) => {
        this.setState({email:  event.target.value})
    }

    addPassword = (event) => {
        this.setState({password:  event.target.value})
        
    }

    addConfirmPassword = (event) => {
        console.log(event)
        this.setState({confirmPassword:  event.target.value})
    }

    addRegistration = (value) => {
        this.setState({registration:  value})

    }

    addCRA = (value) => {
        this.setState({cra: value})
        
    }

    createCandidateAccount = () => {
        console.log("Criando Conta")
        if(this.isEqualsPassword() && !this.isNotValidStudent()){
            const body = {
                registration: this.state.registration,
                name: this.state.name,
                password: this.state.password,
                email: this.state.email,
                cra: this.state.cra,
                description: '',
                skills: {
                    hardSkills: [],
                    softSkills: [],
                    languages: []
                },
                experiences: [{
                    academic: [],
                    work: []
                }],
                phases: []
            }
            try {
                let res = candidateService.postCandidate(body)
                console.log(res)
            } catch(err) {
                console.log(err)
            }
        }
        
    }

    isNotValidStudent = () => {
        return this.state.registration === null || 
        this.state.name === null || 
        this.state.email === null || 
        this.state.password === null || 
        this.state.cra === null 
    }

    isEqualsPassword = () => {
        return this.state.password === this.state.confirmPassword
    }


    render() {
        return <Content>
            <Header>
                <Title color level={3}>Criar Conta</Title>
            </Header>
            <Content>
                <DataPersonalForm
                name={this.state.name} 
                registration={this.state.registration}
                cra={this.state.cra}
                email={this.state.email}
                password={this.state.password}
                addName={this.addName}
                />
                                          
            </Content>
            <Legend>
                <Button width={30} onClick={ this.createCandidateAccount }>Criar Conta</Button>
            </Legend>
        </Content>
    }


}

export default CreateCandidateAccount