import React, { Component } from 'react'
import { Title, Button } from '../../atoms'
import { ModalSelection } from '../../molecules'
import { SkillsForm } from '../../organisms'
import { 
    Form,
    HeaderForm, 
    InputForm,
    Description,
    Legend} from './styled'

import SelectionService from '../../../services/selectionsService'

class CreateSelection extends Component {
    constructor(props) {
        super(props)
        this.selectionService = new SelectionService()

        this.state = {
            visible: props.visible,
            onCancel: props.onCancel,
            onOk: props.onOk,
            project: props.project,
            lab: props.lab,
            color: props.color,
            role: '',
            description: '',
            hardSkills: [],
            softSkills: [],
            languages: []
        }
    }

    addSelection = () => {
        const body = {
            "role": this.state.role,
            "description": this.state.description,
            "phases": [],
            "current": false,
            "projectId": this.state.project._id,
            "skills": {
              "hardSkills": this.state.hardSkills,
              "softSkills": this.state.softSkills,
              "languages": this.state.languages
            }
        }
        
        console.log(body)
        this.setState({
            role: '',
            description: '',
            hardSkills: [],
            softSkills: [],
            languages: []
        })
        console.log(this.state)
        this.state.onOk()
    }

    addRole = (event) => {
        this.setState({ role: event.target.value })
    }

    addDescription = (event) => {
        this.setState({ description: event.target.value })
    }

    addSofSKill = (skill) => {
        const skills =  this.state.softSkills
        skills.push(skill)
        this.setState({ softSkills: skills })
    }

    addHardSKills = (skill) => {
        const skills =  this.state.hardSkills
        skills.push(skill)      
        this.setState({ hardSkills: skills }) 
    }

    addLanguage = (skill) => {
        const skills =  this.state.languages
        skills.push(skill)      
        this.setState({ languages: skills })  
    }

    deleteSofSKill = (skill) => {
        const skills =  this.state.softSkills

        for(var i = 0; i < skills; i++){
            if(skills[i] === skill){
                skills.splice(i, 1)
            }
        }
        skills.push(skill)
        this.setState({ softSkills: skills })      
      
        console.log(this.state.softSkills)
    }

    deleteHardSKills = (skill) => {
        const skills =  this.state.hardSkills
        
        for(var i = 0; i < skills; i++){
            if(skills[i] === skill){
                skills.splice(i, 1)
            }
        }
        skills.push(skill)
        this.setState({ hardSkills: skills })      
      
        console.log(this.state.hardSkills)
    }

    deleteLanguage = (skill) => {
        const skills =  this.state.languages
        for(var i = 0; i < skills; i++){
            if(skills[i] === skill){
                skills.splice(i, 1)
            }
        }
        skills.push(skill)    
        this.setState({ languages: skills })      
  
        console.log(this.state.languages)
    }

    render() {
        return <ModalSelection
            projectName={ this.state.project.name }
            labName={ this.state.lab.name }
            visible={ this.state.visible }
            color={ this.state.color }
            onCancel={ this.state.onCancel }
            onOk={ this.state.onOk }
        >
            <Form>
                <HeaderForm>
                    <Title color level={4}>Criar Seleção</Title>
                </HeaderForm>  
                <InputForm
                    value={ this.state.role } 
                    size="large" 
                    placeholder="Vaga"
                    onChange={ this.addRole }/>
                <Description 
                    value={ this.state.description }
                    rows={3} 
                    placeholder="Descrição"
                    onChange={ this.addDescription }/>
                <Title color level={4}>Competências</Title>
                <SkillsForm
                    title={ "Habilidades Técnicas" } 
                    skills={ this.state.hardSkills } 
                    options={ [1, 2, 3] }
                    addSkill={ this.addHardSKills }
                    deleteSkill={() => alert()} 
                    buttonColor={ this.state.color.icon } 
                /> 
                <SkillsForm
                    title={ "Habilidades Interpessoais" } 
                    skills={ this.state.softSkills } 
                    addSkill={ this.addSofSKill }
                    deleteSkill={ this.deleteSofSKill } 
                    buttonColor={ this.state.color.icon } 
                />       
                <SkillsForm
                    title={ "Idiomas" } 
                    skills={ this.state.languages } 
                    options={ [1, 2, 3] }
                    addSkill={ this.addLanguage }
                    deleteSkill={() => alert()} 
                    buttonColor={ this.state.color.icon } 
                />                    
            </Form>    
            <Legend>
                <Button color={ this.state.color.icon } onClick={ this.addSelection }>Criar</Button>
            </Legend>
        </ModalSelection>
    }
}

export default CreateSelection