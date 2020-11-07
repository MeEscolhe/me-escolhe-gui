import React from 'react'
import { Button } from '../../components/atoms'
import { HeaderProject } from '../../components/molecules'
import { AboutCard, SkillsCard } from '../../components/templates'
import { Content, Footer } from './styled'

class ProjectProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            project: {
                name: 'História da Apple',
                labName: 'Apple',
                role: 'FullStack',
                image: 'https://i.pinimg.com/originals/92/b4/fa/92b4fa6d36f08759306310acb5ecb219.jpg',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                hardSkills: [
                    {
                        name: "Java",
                        level: 1,
                    },
                    {
                        name: "Java",
                        level: 1,
                    },
                    {
                        name: "Java",
                        level: 1,
                    },
                    {
                        name: "Java",
                        level: 1,
                    },
                    {
                        name: "Java",
                        level: 1,
                    },
    
                    {
                        name: "Java",
                        level: 2,
                    },
                    {
                        name: "Java",
                        level: 2,
                    },
                    {
                        name: "Java",
                        level: 2,
                    },
                    {
                        name: "Java",
                        level: 2,
                    },
                    {
                        name: "Java",
                        level: 2,
                    },
    
                    {
                        name: "Java",
                        level: 3,
                    },
                    {
                        name: "Java",
                        level: 3,
                    },
                    {
                        name: "Java",
                        level: 3,
                    },
                    {
                        name: "Java",
                        level: 3,
                    },
                    {
                        name: "Java",
                        level: 4,
                    },
    
                    {
                        name: "Java",
                        level: 4,
                    },
                    {
                        name: "Java",
                        level: 4,
                    },
                    {
                        name: "Java",
                        level: 4,
                    },
                    {
                        name: "Java",
                        level: 4,
                    },
                    {
                        name: "Java",
                        level: 5,
                    },
                    {
                        name: "Java",
                        level: 5,
                    },
                    {
                        name: "Java",
                        level: 5,
                    },
                    {
                        name: "Java",
                        level: 5,
                    },
                    {
                        name: "Java",
                        level: 5,
                    },
                    {
                        name: "Java",
                        level: 5,
                    },
                ],
                softSkills: [
                    {
                        name: "Comunicação"
                    },
                    {
                        name: "Comunicação"
                    },
                    {
                        name: "Comunicação"
                    },
                    {
                        name: "Comunicação"
                    }
                ], 
                languages: [
                    {
                        name: "Espanhol",
                        level: 1
                    },
                    {
                        name: "Alemão",
                        level: 2
                    },
                    {
                        name: "Inglês",
                        level: 3
                    },
                ]
            }
        }
    }

    render() {
        return <>
            <HeaderProject project={ this.state.project }/>
            <Content>
                <AboutCard description={ this.state.project.description }/>
                <SkillsCard 
                    hardSkills={ this.state.project.hardSkills } 
                    softSkills={ this.state.project.softSkills }
                    languages={ this.state.project.languages }/>
            </Content>
            <Footer>
                <Button onClick={() => alert("Você se Candidatou a Vaga!!!")}>Candidatar-se</Button>
            </Footer>            
        </>
    }
}

export default ProjectProfile