import React, { Component } from 'react'
import LabService from '../../../services/labService'
import ProjectService from '../../../services/projectService'
import { SelectComponent } from '../../atoms/Select/styled'

//Pagina de criação de projeto visão PROFESSOR
class CreateProject extends Component {
    constructor(){
        this.state = {
            visible: this.props.visible,
            color: this.props.color,
            onCancel: this.props.onCancel,
            onOk: this.props.onOk,
            labs: [],
            labId: null,
            nome: null,
            description: null
        }
    }

    componentDidMount() {
        LabService.get().then(data => this.setState({labs: data}))
    }

    setLab = (lab) => {
        this.setState({ lab: lab.labId})
    }

    setNome = (name) => {
        this.setState({ nome: name})
    }

    setDescription = (description) => {
        this.setState({ description: description})
    }

    getLabs = () => {
        return this.state.labs.map(lab => {
            return <OptionComponent value={lab.id}>
                {lab.name}
            </OptionComponent>
        })
    }

    addProject = () => {
        let project = {
            selections: [],
            name: this.state.name,
            description: this.state.description,
            labId: this.state.labId
        }
        let res = ProjectService.createProject(project)
        if (res === 1) console.log("Deu ERRO ao criar o projeto")
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
                    <Title color level={4}>Criar Projeto</Title>
                </HeaderForm>
                <Input 
                    placeholder="Nome do projeto"
                    onChange={this.setNome}
                    size="large"
                />
                <TextArea 
                    placeholder="Descrição do projeto"
                    onChange={this.setDescription}
                    allowClear
                />
                <SelectComponent
                    placeholder="Laboratório"
                    value={this.state.labId}
                    onChange={this.setLab}
                >
                    {this.getLabs()}
                </SelectComponent>
            </Form>
            <Legend>
                <Button onClick={ this.addProject }>Criar</Button>
            </Legend>
        </ModalSelection>
    }
}