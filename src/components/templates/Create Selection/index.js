import React, { Component } from 'react'
import { Title, Button, Select } from '../../atoms'
import { ModalSelection } from '../../molecules'
import { SkillsForm } from '../../organisms'
import { 
    Form,
    HeaderForm,
    Description,
    SelectComponent,
    OptionComponent, 
    Legend,
    LegendOption} from './styled'

import { colors } from '../../../styles/colors'

import { roles } from '../../../pt-br'

import SelectionService from '../../../services/selectionsService'


class CreateSelection extends Component {
    constructor(props) {
        super(props)
        this.selectionService = SelectionService
        this.state = {
            visible: props.visible,
            onCancel: props.onCancel,
            onOk: props.onOk,
            projectID: null,
            lab: null,
            role: null,
            description: null,
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
            "projectId": this.state.projectID,
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

    addRole = (value) => {
        this.setState({ role: value })
    }

    addProject = (value) => {
        this.setState({ projectID: value})
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

    projects = () => {
        const options = [
            {
                project:{   
                    _id: "ID Project",
                    name: "Nome do projeto",
                    lab:{
                        name: "Nome do lab"
                    }
                }
            },
            {
                project:{   
                    _id: "ID Lab",
                    name: "Nome do projeto",
                    lab:{
                        name: "Nome do lab"
                    }
                }
            },
            {
                project:{   
                    _id: "ID",
                    name: "Nome do projeto",
                    lab:{
                        name: "Nome do lab"
                    }
                }
            },
        ]

        return options.map(project => {
            return <OptionComponent
                value={project.project._id}
            >{
                <>
                    {project.project.name}
                    <LegendOption>
                        {project.project.lab.name}
                    </LegendOption>
                </>
            }           
            </OptionComponent>
        })
    }

    render() {
        return <ModalSelection
            visible={ this.state.visible }
            color={ this.state.color }
            onCancel={ this.state.onCancel }
            onOk={ this.state.onOk }
        >
            <Form>
                <HeaderForm>
                    <Title color level={4}>Criar Seleção</Title>
                </HeaderForm>  
                <SelectComponent 
                    value={ this.state.projectID }
                    onChange={ this.addProject }
                    placeholder="Projeto">
                    { this.projects() }
                </SelectComponent>
                <Select 
                    value={ this.state.role }
                    onChange={ this.addRole }
                    placeholder="Vaga"
                    options={roles}/>
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
                /> 
                <SkillsForm
                    title={ "Habilidades Interpessoais" } 
                    skills={ this.state.softSkills } 
                    addSkill={ this.addSofSKill }
                    deleteSkill={ this.deleteSofSKill } 
                />       
                <SkillsForm
                    title={ "Idiomas" } 
                    skills={ this.state.languages } 
                    options={ [1, 2, 3] }
                    addSkill={ this.addLanguage }
                    deleteSkill={() => alert()} 
                />                    
            </Form>    
            <Legend>
                <Button onClick={ this.addSelection }>Criar</Button>
            </Legend>
        </ModalSelection>
    }
}

export default CreateSelection