import React from 'react'
import { Button } from '../../components/atoms'
import { HeaderProject } from '../../components/molecules'
import { AboutCard, SkillsCard } from '../../components/templates'
import { Content, Footer } from './styled'

import selectionService from '../../services/selectionsService'
import phaseService from '../../services/phasesService'
import user from '../../user'

class SelectionProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selection: {}
        }
    }

    componentDidMount() {
        const location = window.location.href
        const selectionID = (location.split("/"))[5]
        selectionService.getSelection(selectionID).then(data => {
            this.setState({selection: data})
        })
    }

    apply = () => {
        phaseService.registrationPhase(this.state.selection.phases[0], user.getID())
        alert("VOCê SE CANDIDATOU <3")
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
                <Button onClick={ this.apply }>Candidatar-se</Button>
            </Footer>            
        </>
    }
}

export default SelectionProfile