import React, { useState } from 'react'
import { colors } from '../../styles/colors'
import { Avatar, Button, ButtonLink, Title, Text } from '../../components/atoms'
import { Login } from '../../components/templates'
import { Container, Header, Menu, Logo, HeaderBody, Plans, Time, Footer } from './styled'

import {ReactComponent as LogoGradient} from '../../styles/images/logo/Logo-gradient.svg'

export const Home = () => {
    const [openLogin, setOpenLoginFom] = useState(false)
    
    return <Container>
        <Header>
            <Menu>
                <ButtonLink color={ colors.white } backgroundColor={ colors.pinkLight }>Login</ButtonLink>
            </Menu>
            <Logo>
                <Avatar size={200} color={ colors.pinkLight } logo={LogoGradient}/>
            </Logo>  
        
            <HeaderBody>
                <Title color={ colors.pinkLight }>Bem Vindos ao Me Escolhe! </Title>
                
                <Text color={ colors.ice }>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </Text>
                <ButtonLink color={ colors.white } backgroundColor={ colors.pinkLight } >Saiba mais!</ButtonLink>
            </HeaderBody>           
            
        </Header>
        <Plans>
            <Title level={2} color={ colors.pinkLight }>Planos</Title>
        </Plans>
        <Time>
            <Title level={2} color={ colors.pinkLight }>Sobre Nós</Title>
        </Time>
        <Footer>
            <Title level={2} color={ colors.pinkLight }>Contatos</Title>
        </Footer>
    </Container>
    
};

export default Home