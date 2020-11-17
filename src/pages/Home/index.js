import React from 'react'
import { colors } from '../../styles/colors'
import { Avatar, Button, Title } from '../../components/atoms'
import { TopBar, Logo } from './styled'
import { useHistory } from 'react-router-dom'
import { route } from '../../routes'

import auth from '../../auth'

export const Home = () => {
    const history = useHistory()

    const loginPage = () => {
        auth.login(() => {
            history.push(route.selections)
        })
    }

    return <>
        <TopBar>
            <Logo>
                <Avatar size={54} color={ colors.pink }/>
                <Title color level={4}> ME ESCOLHE </Title>
            </Logo>
            <Button onClick={ loginPage }>Login</Button>
        </TopBar>
    </>
    
};

export default Home