import React, { useState } from 'react'
import { colors } from '../../../styles/colors'
import { Avatar, Title, Button } from '../../atoms'
import { ModalSelection } from '../../molecules'
import { Form, Header, InputForm, Legend } from './styled'
import { useHistory } from 'react-router-dom'
import { route } from '../../../routes'

import auth from '../../../auth'

export const Login = ({visible, onCancel, onOk}) => {
    const [typeAccount, setTypeAccount] = useState()
    const [email, setEmail] =  useState()
    const [password, setPassword] =  useState()

    const CANDIDATE = "CANDIDATE"
    const RECRUITER = "RECRUITER"
    const history = useHistory()

    const loginPage = () => {
        console.log(typeAccount)
        const user = {
            email: email,
            password: password
        }

        if(typeAccount === CANDIDATE) {
            auth.login(user, CANDIDATE, () => {
                history.push(route.selections)
            })
        } else if(typeAccount === RECRUITER) {
            auth.login(user, RECRUITER, () => {
                history.push(route.selections)
            })
        } else {
            history.push(route.home)
        }  
    }

    const setUserEmail = (event) => {
        setEmail(event.target.value)
    }

    const setUserPassword = (event) => {
        setPassword(event.target.value)
    }

    const createAccountPage = () => {
        if(typeAccount === CANDIDATE)
            history.push(route.accountStudent)
        else
            history.push(route.accountRecruiter)
    }

    return <ModalSelection
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        title={
            <Avatar color={ colors.icon }/>
        }
    >
        {
            !typeAccount ? 
            <>
                <Legend>
                    <Button color={ colors.icon } onClick={() => setTypeAccount(CANDIDATE) }>Estudante</Button>
                </Legend>
                <Legend>
                    <Button color={ colors.icon } onClick={() => setTypeAccount(RECRUITER) }>Porfessor</Button>
                </Legend>
            </>
            :
            <>
                <Form>
                    <Header>
                        <Title color level={4}>Criar Seleção</Title>
                    </Header>  
                    <InputForm
                        size="large" 
                        placeholder="E-mail"
                        value={ email }
                        onChange={ setUserEmail}
                        />
                    <InputForm
                        size="large" 
                        placeholder="Senha"
                        value={ password }
                        onChange={setUserPassword}
                        />
                </Form>
                <Legend>
                    <Button color={ colors.icon } onClick={() => loginPage() }>Login</Button>
                </Legend>

                <Legend>
                    <Button color={ colors.icon } onClick={() => createAccountPage() }>Criar Conta</Button>
                </Legend>
            </>
        }
        
    </ModalSelection>

}

export default Login