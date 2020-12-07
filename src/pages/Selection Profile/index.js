import React from 'react'
import { Button } from '../../components/atoms'
import { HeaderProject } from '../../components/molecules'
import { AboutCard, SkillsCard, StatusModal } from '../../components/templates'
import { Content, Footer } from './styled'

import selectionService from '../../services/selectionsService'
import candidateService from '../../services/candidateService'
import phaseService from '../../services/phasesService'
import user from '../../user'

class SelectionProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selection: {},
            isSuccess: false,
            isError: false,
            hideCandidateButton: false
        }
    }

    componentDidMount() {

        const location = window.location.href
        const selectionID = (location.split("/"))[5]
        Promise.all([
            selectionService.getSelection(selectionID),
            candidateService.getCandidateIsInSelection(user.getID(), selectionID)
        ]).then(([selectionData, hideCandidateButton]) => {
            this.setState({ selection: selectionData, hideCandidateButton: hideCandidateButton.data })
        }).catch((err) => { console.log(err) });
    }

    apply = () => {
        console.log(this.state.selection)
        let phases =  this.state.selection.phases ? this.state.selection.phases : []   
        phaseService.registrationPhase(phases[0], user.getID()).then(status => {
            console.log(status)
            console.log(status === 200)
            if (status === 200)
                this.setState({ isSuccess: true })
            else
                this.setState({ isError: true })

        })
    }

    render() {
        return <>
            <HeaderProject
                role={this.state.selection.role}
                project={this.state.selection.project ? this.state.selection.project : {}} />
            <Content>
                <AboutCard description={this.state.selection.project ? this.state.selection.project.description : ""} />
                <SkillsCard
                    hardSkills={this.state.selection.skills ? this.state.selection.skills.hardSkills : []}
                    softSkills={this.state.selection.skills ? this.state.selection.skills.softSkills : []}
                    languages={this.state.selection.skills ? this.state.selection.skills.languages : []} />
            </Content>
            {
                (user.isCandidate() && !this.state.hideCandidateButton) ?
                    <Footer>
                        <Button onClick={this.apply}>Candidatar-se</Button>
                    </Footer>
                    : <></>
            }
            <StatusModal
                visible={this.state.isSuccess}
                title={"Sucesso!"}
                message={"Candidatura realizada com sucesso"}
                onClick={() => this.setState({isSuccess: false})}
            />
            <StatusModal
                visible={this.state.isError}
                error
                title={"Erro!"}
                message={"Tente novamente em alguns segundos"}
                onClick={() => this.setState({isError: false})}/>

        </>
    }
}

export default SelectionProfile