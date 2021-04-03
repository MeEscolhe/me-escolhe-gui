import React from 'react'
import { Button } from '../../components/atoms'
import { HeaderProject } from '../../components/molecules'
import { AboutCard, SkillsCard, StatusModal } from '../../components/templates'
import { Content, Footer } from './styled'

import selectionService from '../../services/selectionsService'
import candidateService from '../../services/candidateService'
import phaseService from '../../services/phasesService'

import { withRouter } from 'react-router-dom'
import { route } from '../../routes'

import user from '../../user'

class SelectionProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selection: {},
            openModal: false,
            modal: {
                isError: false,
                title: '',
                message: '',
                onClick: () => {}
            },            
            hideCandidateButton: false,
            selectionStatusText: ''
        }
    }

    async componentDidMount() {
        const selectionID = this.selectionID()

        await selectionService.getSelection(selectionID)
        .then((res) => {
            let text = res.data.current ? "Fechar" : "Abrir"
            this.setState({ selection: res.data, selectionStatusText: text})
        }).catch((error) => {
            console.error(error)
            this.setState({isError: false})
        })

        if(user.isCandidate())
            candidateService.getCandidateIsInSelection(user.getID(), selectionID)
            .then((res) => {
                this.setState({ hideCandidateButton: res.data})
            })
            .catch((error) => {
                console.error(error)
                this.setState({isError: false})
            })
    }

    selectionID = () => {
        const location = window.location.href
        return (location.split("/"))[5]
    }

    redirect = (route) => {
        this.props.history.push(route)
    }

    setSelectionStatusText = () => {
        this.setState({selectionStatusText: "Fechar"})
    }

    apply = () => {
        console.log(this.state.selection)
        let phases =  this.state.selection.phases ? this.state.selection.phases : []   
        phaseService.registrationPhase(phases[0], user.getID()).then(status => {
            console.log(status)
            console.log(status === 200)
            if (status === 200)
                this.setState({ openModal: true, modal: {
                    isError: false,
                    title: 'Candidatura Realizada',
                    message: 'Parabéns! Sua candidatura foi realizada com sucesso, agora é com o recrutador. Boa sorte! Estamos torcendo por você',
                    onClick: () => this.redirect(route.selections)
                } })
            else
                this.setState({ openModal: true, modal: {
                    isError: true,
                    title: 'Ocorreu um Erro ao Candidatar-se',
                    message: 'Ops! Parece que tivemos um problema ao realizar a sua candidatura. Desculpe o transtorno, sabemos a importância desse processo para você. Pedimos paciência e que tente novamente em instantes. ',
                    onClick: () => this.setState({openModal: false})
                } })
        })
    }

    openSelection = () => {
        const selectionID = this.selectionID()
        console.log(this.state.selection)
        const body = this.state.selection
        body.current = !body.current
        console.log(body)
        selectionService.setCurrentSelection(selectionID, body)
        .then((res) => {
            console.log(res);
            console.error(res)
            this.setState({ openModal: true, modal: {
                isError: true,
                title: 'TESTE',
                message: 'Ops! Parece que tivemos um problema ao realizar a sua candidatura. Desculpe o transtorno, sabemos a importância desse processo para você. Pedimos paciência e que tente novamente em instantes. ',
                onClick: () => this.setState({openModal: false})
            } })
        })
        .catch((error) => {
            console.error(error)
            this.setState({ openModal: true, modal: {
                isError: true,
                title: 'Ocorreu um Erro ao ' + this.state.selectionStatusText,
                message: 'Ops! Parece que tivemos um problema ao '+ this.state.selectionStatusText.toLowerCase() +' a seleção. Desculpe o transtorno! Pedimos paciência e que tente novamente em instantes. ',
                onClick: () => this.setState({openModal: false})
            } })
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
                user.isRecruiter() ?
                <Footer>
                    <Button onClick={this.openSelection}>{this.state.selectionStatusText}</Button>
                </Footer>
                : (user.isCandidate() && !this.state.hideCandidateButton) ?
                    <Footer>
                        <Button onClick={this.apply}>Candidatar-se</Button>
                    </Footer>
                : <Footer>
                    <Button onClick={this.apply}>Cancelar candidatura</Button>
                </Footer>
            }
            <StatusModal
                visible={this.state.openModal}
                error={this.state.modal.isError}
                title={this.state.modal.title}
                message={this.state.modal.message}
                onClick={this.state.modal.onClick}
            />
        </>
    }
}

export default withRouter(SelectionProfile)