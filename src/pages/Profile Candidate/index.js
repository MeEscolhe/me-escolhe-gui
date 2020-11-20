import React from 'react'
import { HeaderUser } from '../../components/molecules'
import { SkillsCard, ExperiencesCard, AboutCard } from '../../components/templates'
import { Header, Content } from './styled'

import userService from '../../services/userService'
import user from '../../user'

class CandidateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            user: {
                name: "Sheilla da Silva",
                email: "sheilla.silva@teste.com",
                soft: 3,
                hard: 13,
                language: 2,
                cra: 7.5,
                image: "https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.0-9/107065226_3160359924018706_6230635106728147226_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=s2dirxK1HDgAX_4KAdA&_nc_ht=scontent.fjdo10-2.fna&oh=82c1a4b907bdd6c641671bab8ffb106e&oe=5FABD24E"
            },
            academicExperiences: [
                {
                    title: "Graduanda em Computação",
                    category: "Graduação",
                    institution: "UFCG",
                    duration: "10"  
                },
                {
                    title: "Graduanda em Computação",
                    category: "Graduação",
                    institution: "UFCG",
                    duration: "10"  
                },
                {
                    title: "Graduanda em Computação",
                    category: "Graduação",
                    institution: "UFCG",
                    duration: "10"  
                },
            ],
            workExperiences: [
                {
                    role: "Graduanda em Computação",
                    institution: "UFCG",
                    duration: "10"  
                },
                {
                    role: "Graduanda em Computação",
                    institution: "UFCG",
                    duration: "10"  
                },
                {
                    role: "Graduanda em Computação",
                    institution: "UFCG",
                    duration: "10"  
                },
                {
                    role: "Graduanda em Computação",
                    institution: "UFCG",
                    duration: "10"  
                },
               
            ],
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

    componentDidMount() {
        console.log("CHAMANDO")
        userService.getCandidate(user.getID()).then(data => {
            console.log(data)
            this.setState({ user: data})
        })
        console.log(this.state.user)

    }

    render() {
        return <>
            <Header>
                <HeaderUser user={ this.state.user }/>
            </Header>
            <Content>
                <AboutCard description={ this.state.user.description }/>
                {
                    this.state.user.skills ? 
                    <SkillsCard 
                        hardSkills={ this.state.user.skills.hardSkills } 
                        softSkills={ this.state.user.skills.softSkills } 
                        languages={ this.state.user.skills.languages }/>
                    :
                    <></>
                }
                {
                    this.state.user.experiences ? 
                    <ExperiencesCard 
                        workExperiences={ this.state.user.experiences.workExperiences } 
                        academicExperiences={ this.state.user.experiences.academicExperiences }/>
                    :
                    <>
                    </>
                }
                
            </Content>
        </>
        
    }
}
export default CandidateProfile;