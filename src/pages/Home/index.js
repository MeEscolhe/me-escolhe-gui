import React, { useState } from 'react'
import { colors } from '../../styles/colors'
import { Avatar, Button, Title } from '../../components/atoms'
import { Login } from '../../components/templates'
import { TopBar, Logo } from './styled'

export const Home = ({setLoading}) => {
    const [openLogin, setOpenLoginFom] = useState(false)
    
    return <>
        <TopBar>
            <Logo>
                <Avatar size={54} color={ colors.pink }/>
                <Title color='black' level={4}> ME ESCOLHE </Title>
            </Logo>
            <Button onClick={() => setOpenLoginFom(true) }>Login</Button>
            <Login
                visible={ openLogin }
                onCancel={() => setOpenLoginFom(false) }
                setLoading={setLoading}
            />
        </TopBar>
    </>
    
};

export default Home