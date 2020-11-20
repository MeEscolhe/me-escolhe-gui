import React from 'react'
import { Button } from '../../components/atoms'
import { HeaderProject } from '../../components/molecules'
import { AboutCard, SkillsCard } from '../../components/templates'
import { Content, Footer } from './styled'

import selectionService from '../../services/selectionsService'

class SelectionProfile extends React.Component {
    constructor(props){
        super(props)
        this.selectionService = selectionService
        this.state = {
            selection: {}
        }
    }

    componentDidMount() {
        const location = window.location.href
        const selectionID = (location.split("/"))[5]
        this.selectionService.getSelection(selectionID).then(data => {
            this.setState({selection: data})
        }
        )
    }

    render() {
        return <>
            <HeaderProject 
                role = { this.state.selection.role }
                project={ this.state.selection.project ? this.state.selection.project : {} }/>
            <Content>
                <AboutCard description={ this.state.selection.project ? this.state.selection.project.description : ""}/>
                <SkillsCard 
                    hardSkills={ this.state.selection.skills ? this.state.selection.skills.hardSkills : [] } 
                    softSkills={ this.state.selection.skills ? this.state.selection.skills.softSkills : []}
                    languages={ this.state.selection.skills? this.state.selection.skills.languages : [] }/>
            </Content>
            <Footer>
                <Button onClick={() => alert("Você se Candidatou a Vaga!!!")}>Candidatar-se</Button>
            </Footer>            
        </>
    }
}

export default SelectionProfile