import React, { Component } from 'react'
import { Title, Button, Tag, Select } from '../../atoms'
import { ModalSelection } from '../../molecules'
import { Skills } from '../../organisms'
import { 
    Form,
    HeaderForm, 
    InputForm,
    Description,
    Skill,
    Legend} from './styled'

import { PlusOutlined } from '@ant-design/icons'

class CreateSelection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: props.visible,
            onCancel: props.onCancel,
            onOk: props.onOk,
            projectName: props.projectName,
            labName: props.labName,
            color: props.color,
            hardSkills: [],
            softSkills: [],
            languages: [],
            hardSKillValue: '',
            levelHardSKill: 0,
            softSkillValue: '',
            languageValue: '',
            levelLanguage: 0,
        }
    }

    newHardSKill = (event) => {
        this.setState({hardSKillValue: event.target.value})
    }

    newLevelHardSKill = (value) => {
        this.setState({levelHardSKill: value})
    }

    addHardSKills = () => {
        if (this.state.hardSKillValue !== '' && this.state.levelHardSKill > 0) {
            const skill = ({
                name : this.state.hardSKillValue,
                level: this.state.levelHardSKill
            })
            const skills =  this.state.hardSkills.push(skill)
            this.setState({ hardSkills: skills })
            this.setState({hardSKillValue: ''})
            this.setState({levelHardSKill: 0})
        }
        console.log(this.state.hardSkills)
    }

    render() {
        return <ModalSelection
            projectName={ this.state.projectName }
            labName={ this.state.labName }
            visible={ this.state.visible }
            color={ this.state.color }
            onCancel={ this.state.onCancel }
            onOk={ this.state.onOk }
        >
            <Form>
                <HeaderForm>
                    <Title color level={4}>Criar Seleção</Title>
                </HeaderForm>  
                <InputForm size="large" placeholder="Vaga"/>
                <Description rows={3} placeholder="Descrição"/>

                <Title color level={4}>Competências</Title>
                <Skill>
                    <Title color level={5}>Habilidades Técnicas</Title>
                    <InputForm 
                        onChange={ this.newHardSKill } 
                        size="large" 
                        placeholder="Habilidade Técnica"/>
                    <Select 
                        onChange={ this.newLevelHardSKill }
                        options={[1, 2, 3]}/>
                    <Skills hardSkills={ this.state.hardSkills }/>
                    <Legend>
                        <Button 
                            color={ this.state.color.icon } 
                            onClick={ this.addHardSKills }
                            icon={ <PlusOutlined /> }> Add </Button>
                    </Legend>
                </Skill>                    
            </Form>    
            <Legend>
                <Button color={ this.state.color.icon } onClick={ this.state.onOk }>Criar</Button>
            </Legend>
        </ModalSelection>
    }
}

export default CreateSelection