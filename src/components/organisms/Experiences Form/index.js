import React, { Component } from 'react'
import { Title, Input, Button, Select } from '../../atoms'
import { Experiences } from '../../molecules'
import { DatePicker } from 'antd'
import { Legend } from './styled'

import { PlusOutlined } from '@ant-design/icons'
import moment from 'moment'

class ExperiencesForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            type: null,
            title: null,
            category: null,
            categories: ['Fundamental', 'Médio', 'Tecnico', 'Graduação', 'Mestrado', 'Doutorado'],
            role: null,
            institution: null,
            initialDate: null,
            finalDate: null
        }
    }

    componentDidMount(){
        this.setState({type: this.props.type})

    }

    addTitle = (event) => {
        this.setState({title: event.target.value})
    }

    addCategory = (value) => {
        this.setState({category: value})
    }

    addRole = (event) => {
        this.setState({role: event.target.value})
    }

    addInstitution = (event) => {
        this.setState({institution: event.target.value})
    }

    addInitialData = (event) => {
        const date = moment(event._d)
        this.setState({initialDate: date})
    }

    addFinalDate = (event) => {
        const date = moment(event._d)
        this.setState({finalDate: date})
    }

    isAcademic = () => {
        return this.state.type === "Academic"
    }

    add = () => {
        let body = {}
        if(this.isAcademic()){
            body = {
                title: this.state.title,
                category: this.state.category,
                institution: this.state.institution,
                initialDate : this.state.initialDate,
                finalDate: this.state.finalDate            
            }
        } else{
            body = {
                role: this.state.role,
                institution: this.state.institution,
                initialDate : this.state.initialDate,
                finalDate: this.state.finalDate            
            }
        }
        this.props.addExperience(body)
        this.setState({})       
    }

    render() { 
        return <>
            <Title color='black' level={5}>{ 
                this.isAcademic() ? "Experiência Academica" 
                : "Experiência Profissional"
            }</Title>

            <Input 
                value={ this.state.title }
                onChange={ this.addTitle }
                placeholder={ this.isAcademic() ? "Nome do curso" : "Cargo"}
            />
            {
                this.isAcademic() ?
                <Select 
                value={ this.state.category }
                options={ this.state.categories }
                onChange={ this.addCategory }
                placeholder="Nível de Formação Acadêmica"
                /> 
                : <></>
            }
            <Input 
                value={ this.state.institution }
                onChange={ this.addInstitution }
                placeholder="Instituição ou Empresa"
            />
            <DatePicker
                placeholder="Inicio"
                value={ this.state.initialDate }
                onChange={ this.addInitialData }
                format={'YYYY/MM/DD'} />
            <DatePicker
                placeholder="Final" 
                value={ this.state.finalDate }
                onChange={ this.addFinalDate }
                format={'YYYY/MM/DD'} />
            <Legend>
                <Button 
                    onClick={ this.add }
                    icon={ <PlusOutlined /> }/>
            </Legend>
            {
                this.isAcademic() ? 
                    <Experiences academicExperiences={ this.props.experiences }/>
                : <Experiences workExperiences={ this.props.experiences }/>                 
            }            
        </>    
    }
}

export default ExperiencesForm