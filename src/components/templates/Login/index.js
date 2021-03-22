import React, { useState } from 'react'
import { colors } from '../../../styles/colors'
import { Avatar, Title, Button, Input } from '../../atoms'
import { ModalSelection, ModalMessage } from '../../molecules'
import { Form, Header, Password, Legend } from './styled'
import { useHistory } from 'react-router-dom'
import { route } from '../../../routes'

import auth from '../../../auth'

export const Login = ({ visible, onCancel, onOk }) => {
    const [createAccount, setCreateAccount] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [modalMessage, setModalMessage] = useState({
        title: '',
        message: ''
    })

    const [openModalMessage, setOpenModalMessage] = useState(false)
    const history = useHistory()

    const loginPage = async () => {
        const body = {
            email: email,
            password: password
        }

        const status = await auth.login(body);
        if (status === 200) {
            console.log("Success");
            history.push(route.selections)
        } else {
            setOpenModalMessage(true)
            setModalMessage({
                title: 'Ops! Tivemos um problema.',
                message: 'Parece que tivemos um problema. Tente novamente mais tarde!'
            })
            history.push(route.home)
        }
    }

    const setUserEmail = (event) => {
        setEmail(event.target.value)
    }

    const setUserPassword = (event) => {
        setPassword(event.target.value)
    }

    const closeModal = () => {
        setEmail('')
        setPassword('')
        onCancel()
        setCreateAccount(false)
    }

    return <>
        <ModalMessage
            title={modalMessage.title}
            message={modalMessage.message}
            visible={openModalMessage}
            onOk={() => setOpenModalMessage(false)}
            onCancel={() => setOpenModalMessage(false)}
        />
        <ModalSelection
            visible={visible}
            onCancel={closeModal}
            onOk={onOk}
            title={
                <Avatar color={colors.icon} />
            }
        >
            {
                createAccount ?
                    <>
                        <Legend>
                            <Button color={colors.icon} onClick={() => history.push(route.accountStudent)}>Estudante</Button>
                        </Legend>
                        <Legend>
                            <Button color={colors.icon} onClick={() => history.push(route.accountRecruiter)}>Professor</Button>
                        </Legend>
                    </> :
                    <>
                        <Form>
                            <Header>
                                <Title color='black' level={4}>Login</Title>
                            </Header>
                            <Input
                                size="large"
                                placeholder="E-mail"
                                value={email}
                                onChange={setUserEmail}
                            />
                            <Password
                                size="large"
                                placeholder="Senha"
                                value={password}
                                onChange={setUserPassword}
                            />
                        </Form>
                        <Legend>
                            <Button color={colors.icon} onClick={() => loginPage()}>Login</Button>
                        </Legend>
                        <Legend>
                            <Button color={colors.icon} onClick={() => setCreateAccount(true)}>Criar Conta</Button>
                        </Legend>

                    </>

            }

        </ModalSelection>
    </>
}

export default Login