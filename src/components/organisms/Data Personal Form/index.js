import React, { useState } from 'react';
import { Title, Input, InputNumber } from '../../atoms'
import { Container } from './styled';

export const PersonalForm = ({name, 
    registration, 
    cra, 
    email, 
    password, 
    setName, 
    setRegistration, 
    setCRA,
    setEmail,
    setPassword,
    setConfirmPassword,
    ...props}) => {
    
    return <Container>
    <Title color level={5}>Dados Pessoais</Title>
    <Input 
        value={ name }
        allowClear={true}
        placeholder="Nome"
        onChange={ (event) => setName(event) }/>
    <InputNumber 
        value={ registration }
        allowClear={true}
        placeholder="Matrícula"
        min={0}
        max={999999999}
        onChange={ (event) => setRegistration(event) }/>
    <InputNumber 
        value={ cra }
        allowClear={true}
        placeholder="CRA"
        min={0}
        max={10}
        onChange={ (event) => setCRA(event) }/>
    <Input 
        value={ email }
        allowClear={true}
        placeholder="E-mail"
        onChange={ (event) => setEmail(event) }/>
    <Input 
        value={ password }
        allowClear={true}
        placeholder="Senha"
        onChange={ (event) => setPassword(event) }/>
    <Input 
        value={ confirmPassword }
        allowClear={true}
        placeholder="Confirmar Senha"
        onChange={ (event) => setConfirmPassword(event) }/>
    </Container>   
}

export default PersonalForm;
