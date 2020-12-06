import React, { Component } from 'react'
import { Title, Input, InputTextArea, Button} from '../../components/atoms'
import { ExperiencesForm, SkillsForm } from '../../components/organisms'

import { Content, Header, Container, Legend } from './styled'

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
            description: '',
            cra: null,
            skills: {
                hardSkills: [],
                softSkills: [],
                languages: []
            },
            experiences: [{
                academic: [],
                work: []
            }]
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

    addDescription = (event) => {
        console.log(event.target.value)
        this.setState({description: event.target.value})
        
    }

    addCRA = (event) => {
        this.setState({cra: parseFloat(event.target.value)})
        
    }

    addSoftSkills = (skill) => {
        const skills =  this.state.skills.softSkills
        skills.push(skill)      
        this.setState({skills:{
            hardSkills: this.state.skills.hardSkills, 
            softSkills: skills,
            languages: this.state.skills.languages
        }}) 
    }

    addHardSkills = (skill) => {
        const skills =  this.state.skills.hardSkills
        skills.push(skill)      
        this.setState({skills:{
            hardSkills: skills, 
            softSkills: this.state.skills.softSkills,
            languages: this.state.skills.languages
        }})         
    }

    addLanguages = (skill) => {
        const skills =  this.state.skills.languages
        skills.push(skill)      
        this.setState({skills:{
            hardSkills: this.state.skills.hardSkills, 
            softSkills: this.state.skills.softSkills,
            languages: skills
        }})  
    }

    addAcademicExperience = (experience) => {
        const experiences =  this.state.experiences[0].academic
        experiences.push(experience)      
        this.setState({experiences:[{
            academic: experiences, 
            work: this.state.experiences[0].work
        }]})         
    }

    addWorkExperience = (experience) => {
        const experiences =  this.state.experiences[0].work
        experiences.push(experience)      
        this.setState({experiences:[{
            academic: this.state.experiences[0].academic, 
            work: experiences
        }]})         
    }

    createCandidateAccount = () => {
        console.log("Criando Conta")
        console.log("Passs" + this.isEqualsPassword())
        console.log(!this.isNotValidStudent())
        if(this.isEqualsPassword() && !this.isNotValidStudent()){
            const body = {
                registration: this.state.registration,
                name: this.state.name,
                password: this.state.password,
                description: this.state.description,
                email: this.state.email,
                cra: this.state.cra,
                skills: this.state.skills,
                experiences: [],
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
                <Button width={30} onClick={ this.createCandidateAccount }>Criar Conta</Button>
            </Legend>
        </Content>
    }


}

export default CreateCandidateAccount