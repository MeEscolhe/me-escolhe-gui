import React, { Component } from 'react'
import { Title, Input, InputTextArea, Button, Select, ButtonLink } from '../../components/atoms'
import { SkillsForm } from '../../components/organisms'

import { Footer, Content, Header, Container, Legend } from './styled'

import candidateService from '../../services/candidateService'

class CreateStudentAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            registration: null,
            email: null,
            password: null,
            confirmPassword: null,
            description: '',
            cra: null,
            skills: {
                hardSkills: [],
                softSkills: [],
                languages: []
            },
            experiences: []
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
        this.setState({confirmPassword:  event.target.value})
    }

    addRegistration = (event) => {
        this.setState({registration:  parseInt(event.target.value)})

    }

    addDescription = (value) => {
        this.setState({description: value})
        
    }

    addCRA = (event) => {
        this.setState({cra: parseFloat(event.target.value)})
        
    }

    addSoftSkills = (skill) => {
        const skills =  this.state.softSkills
        skills.push(skill)      
        this.setState({ softSkills: skills }) 
    }

    addHardSkills = (skill) => {
        const skills =  this.state.hardSkills
        skills.push(skill)      
        this.setState({ hardSkills: skills })         
    }

    addLanguages = (skill) => {
        const skills =  this.state.languages
        skills.push(skill)      
        this.setState({ languages: skills })  
    }

    createStudentAccount = () => {
        if(this.isEqualsPassword() && !this.isNotValidStudent()){
            const body = {
                registration: this.state.registration,
                name: this.state.name,
                password: this.state.password,
                description: this.state.description,
                email: this.state.email,
                cra: this.state.cra,
                skills: this.state.skills,
                experiences: this.state.experiences,
                phases: []
            }
            let res = candidateService.postCandidate(body)
            console.log(res)
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
                <Container>
                    <Title color level={5}>Dados Pessoais</Title>
                    <Input 
                        value={ this.state.name }
                        allowClear={true}
                        placeholder="Nome"
                        onChange={ (event) => this.addName(event) }/>
                    <Input 
                        value={ this.state.registration }
                        allowClear={true}
                        placeholder="Matrícula"
                        onChange={ this.addRegistration }/>
                    <Input 
                        value={ this.state.cra }
                        allowClear={true}
                        placeholder="CRA"
                        onChange={ this.addCRA }/>
                    <Input 
                        value={ this.state.email }
                        allowClear={true}
                        placeholder="E-mail"
                        onChange={ this.addEmail }/>
                    <Input 
                        value={ this.state.password }
                        allowClear={true}
                        placeholder="Senha"
                        onChange={ this.addPassword }/>
                    <Input 
                        value={ this.state.confirmPassword }
                        allowClear={true}
                        placeholder="Confirmar Senha"
                        onChange={ this.addConfirmPassword }/>
                </Container>
                <Container>
                    <Title color level={5}>Sobre Você</Title>
                    <InputTextArea
                        rows={5}
                        placeholder="Descrição"
                        onChange={ this.addDescription }
                    />
                </Container>
                <Container>
                    <SkillsForm
                        title={ "Habilidades Técnicas" } 
                        skills={ this.state.skills.hardSkills } 
                        options={ [1, 2, 3] }
                        addSkill={ this.addHardSkills }
                    />
                    <SkillsForm
                        title={ "Habilidades Interpessoais" } 
                        skills={ this.state.skills.softSkills } 
                        options={ [1, 2, 3] }
                        addSkill={ this.addSoftSkills }
                    />
                    <SkillsForm
                        title={ "Idiomas" } 
                        skills={ this.state.skills.languages } 
                        options={ [1, 2, 3] }
                        addSkill={ this.addLanguages }
                    />
                </Container>               
            </Content>
            <Legend>
                <Button onClick={ this.createStudentAccount }>Criar Conta</Button>
            </Legend>
        </Content>
    }


}

export default CreateStudentAccount