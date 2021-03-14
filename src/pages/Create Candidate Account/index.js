import React, { Component } from 'react'
import { Title, Button} from '../../components/atoms'
import { ModalMessage } from '../../components/molecules'
import { DataPersonalForm } from '../../components/organisms'
import { Content, Header, HeaderForm, Legend } from './styled'

import candidateService from '../../services/candidateService'

import { withRouter } from 'react-router-dom'
import { route } from '../../routes'

class CreateCandidateAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            registration: null,
            email: null,
            password: null,
            confirmPassword: null,
            cra: null,
            open: false,
            modalMessage: {
                title: null,
                message: null,
                onOk: () => {}
            }  
        }
    }

    addName = (event) => {
        this.setState({name: event.target.value})
    }

    addEmail = (event) => {
        this.setState({email:  event.target.value.trim()})
    }

    addPassword = (event) => {
        this.setState({password:  event.target.value.trim()})
        
    }

    addConfirmPassword = (event) => {
        this.setState({confirmPassword:  event.target.value.trim()})
    }

    addRegistration = (event) => {
        let register = event.target.value.trim()
        register=register.replace(/[^0-9]/g, '')
        if(register.length > 9) this.setState({registration: parseInt(register.substring(0,8))})
        else this.setState({registration:  parseInt(register)})
    }

    addCRA = (value) => {
        this.setState({cra: value})
    }

    setModalMessage = (title, message, onOk) => {
        this.setState({modalMessage: {title: title, message: message, onOk: onOk}})
    }

    setOpen = (value) => {
        this.setState({open: value})
    }
    isValidString = (prop) => {
        return prop !== null && prop !== undefined
    }

    isValidNumber = (prop) => {
        return prop !== null && prop !== undefined
    }

    isNotValidStudent = () => {
        return this.isValidString(this.state.registration) && 
        this.isValidString(this.state.name) && 
        this.isValidString(this.state.email) && 
        this.isValidString(this.state.password) && 
        this.isValidNumber(this.state.cra)
    }

    isEqualsPassword = () => {
        return this.state.password === this.state.confirmPassword
    }

    redirect = (route) => {
        this.props.history.push(route)
    }

    createCandidateAccount = async () => {
        console.debug("Criando Conta")
        if(!this.isNotValidStudent()) {
            this.setModalMessage(
                'Ops! Ocorreu um Erro',
                'Os dados inseridos são inválidos. Por favor, tente novamente', 
                () => this.setOpen(false)
            )
            this.setOpen(true)
            return
        }
        if(this.isEqualsPassword()){
            const body = {
                registration: this.state.registration,
                name: this.state.name,
                password: this.state.password,
                email: this.state.email,
                cra: this.state.cra
            }
            console.log(body);
            await candidateService.postCandidate(body)
            .then((res) => {
                console.debug(res)
                if(res.status === 200)
                    this.setModalMessage(
                        'Conta Criada',
                        'Parabéns, sua conta foi criada com sucesso! Seja bem vindo!',
                        () => this.redirect(route.home)    
                    )
                else
                    this.setModalMessage(
                        'Ops! Tivemos um problema',
                        'Parece que essa conta já existe!',
                        () => this.setOpen(false)
                    )
            })
            .catch((error) => {
                console.error(error)
                this.setModalMessage(
                    'Ops! Ocorreu um Erro',
                    'Ocorreu um problema na criação da conta. Tente novamente mais tarde',
                    () => this.setOpen(false)
                )
            })

            this.setOpen(true)
        }
    }

    render() {
        return <Content>
            <ModalMessage 
                title={this.state.modalMessage.title} 
                message={this.state.modalMessage.message}
                visible={this.state.open} 
                onOk={this.state.modalMessage.onOk}
                onCancel={() => this.setOpen(false)}
            />
            <Header>
                <Button onClick={() => this.redirect(route.home)}>Voltar</Button>
            </Header>
        
            <HeaderForm>
                <Title color level={3}>Criar Conta</Title>
            </HeaderForm>
            <Content>
                <DataPersonalForm
                name={this.state.name} 
                registration={this.state.registration}
                cra={this.state.cra}
                email={this.state.email}
                password={this.state.password}
                confirmPassword={this.state.confirmPassword}
                setName={this.addName}
                setRegistration={this.addRegistration} 
                setCRA={this.addCRA}
                setEmail={this.addEmail}
                setPassword={this.addPassword}
                setConfirmPassword={this.addConfirmPassword}
                />                                 
            </Content>
            <Legend>
                <Button width={30} onClick={ this.createCandidateAccount }>Criar Conta</Button>
            </Legend>
        </Content>
    }


}

export default withRouter(CreateCandidateAccount)