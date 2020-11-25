import React from 'react'
import { Button } from '../../components/atoms'
import { CardStatus, HeaderProject } from '../../components/molecules'
import { AboutCard, SkillsCard } from '../../components/templates'
import { Content, Footer } from './styled'

import selectionService from '../../services/selectionsService'
import phaseService from '../../services/phasesService'
import user from '../../user'
import { route } from '../../routes'

class SelectionProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selection: {},
            isNotApply: true,
            isOk: false
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
        console.log(this.state.selection.phases)
        const res = phaseService.registrationPhase(this.state.selection.phases[0], user.getID())
       
        res.then(data => {
            console.log(data)
            if(data) 
                this.setState({isNotApply: false, isOk: true})
            else 
                this.setState({isNotApply: false})
        })
        
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
            {
                this.state.isNotApply ?
                <></>
                : 
                this.state.isOk ? 
                <CardStatus 
                    title={"Sucesso!"}
                    message={"Candidatura realizada com sucesso"}
                    onClick={() => this.props.history.push(route.selections)}
                /> 
                : 
                <CardStatus 
                    title={"Erro!"}
                    message={"Tente novamente em alguns segundos"}
                    onClick={() => this.props.history.push(route.selections)}
                />
            }            
        </>
    }
}

export default SelectionProfile