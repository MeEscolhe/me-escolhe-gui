import React, { Component } from 'react'
import { Title, Input, InputTextArea, Button } from '../../components/atoms'

import { Content, Header, HeaderForm, Container, Legend, SelectComponent, OptionComponent } from './styled'

import labService from '../../services/labService'
import teacherService from '../../services/teacherService'

import { withRouter } from 'react-router-dom'
import { route } from '../../routes'

class CreateRecruiterAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            email: null,
            password: null,
            confirmPassword: null,
            description: '',
            lab: {name: null},
            labs: []
        }
    }

    componentDidMount() {
        labService.get().then(options => {
            this.setState({labs: options})
        })
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

    addDescription = (event) => {
        this.setState({description: event.target.value})
    }

    createStudentAccount = () => {
        if(this.isEqualsPassword() && !this.isNotValidTeacher()){
            const body = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                description: this.state.description,
                labId: this.state.lab._id,
                managements: []
            }
            let res = teacherService.post(body)
            console.log(res)
        }
    }

    isNotValidTeacher = () => {
        return this.state.name === null || 
        this.state.email === null || 
        this.state.password === null || 
        this.state.labId === null
    }

    isEqualsPassword = () => {
        return this.state.password === this.state.confirmPassword
    }

    addLab = (labID) => {
        const labs = this.state.labs.filter(({_id}) => _id === labID)
        this.setState({lab: labs[0]})
    }

    redirect = (route) => {
        this.props.history.push(route)
    }

    labs = () => {
        return this.state.labs.map(lab => {
            return <OptionComponent
                value={lab._id}
            >{ lab.name }           
            </OptionComponent>
        })
    }

    render() {
        return <Content>
            <Header>
                <Button onClick={() => this.redirect(route.home)}>Voltar</Button>
            </Header>
            <HeaderForm>
                <Title color='black' level={3}>Criar Conta</Title>
            </HeaderForm>
            <Content>
                <Container>
                    <Title color='black' level={5}>Dados Pessoais</Title>
                    <SelectComponent 
                        value={ this.state.lab.name }
                        onChange={ this.addLab }
                        placeholder="Laboratório">
                        { this.labs() }
                    </SelectComponent>
                    <Input 
                        value={ this.state.name }
                        allowClear={true}
                        placeholder="Nome"
                        onChange={ (event) => this.addName(event) }/>
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
                    <Title color='black' level={5}>Sobre Você</Title>
                    <InputTextArea
                        rows={5}
                        placeholder="Descrição"
                        onChange={ this.addDescription }
                    />
                </Container>
            </Content>
            <Legend>
                <Button width={30} onClick={ this.createStudentAccount }>Criar Conta</Button>
            </Legend>
        </Content>
    }


}

export default withRouter(CreateRecruiterAccount)
