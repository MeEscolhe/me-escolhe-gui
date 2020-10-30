import React from 'react'
import { HeaderProject, Progress } from '../../components/molecules'
import { AboutCard } from '../../components/templates'
import { Content } from './styled'

class CandidateProjectProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            project: {
                name: 'História da Apple',
                labName: 'Apple',
                role: 'FullStack',
                image: 'https://i.pinimg.com/originals/92/b4/fa/92b4fa6d36f08759306310acb5ecb219.jpg',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                phase: {
                    number: '1', 
                    status: 'active'
                }
            }
        }
    }

    render() {
        return <>
            <HeaderProject project={ this.state.project }/>  
            <Content>
                <AboutCard description={ this.state.project.description }/>
                <Progress phase={ this.state.project.phase.number } status={this.state.project.phase.status }/>
            </Content>          
        </>
    }
}

export default CandidateProjectProfile