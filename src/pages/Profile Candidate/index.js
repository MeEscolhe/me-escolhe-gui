import React from 'react'
import { Title, Text } from '../../components/atoms'
import { Experiences, HeaderProfile } from '../../components/molecules'
import { Skills } from '../../components/organisms'
import { Header, Content } from './styled'
import { Card } from 'antd';

class ProfileCandidate extends React.Component {
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
    render() {
        return <>
            <Header>
                <HeaderProfile user={ this.state.user }/>
            </Header>
            <Content>
                <Card>
                    <Title level={3} color> Sobre </Title>
                    <Text>{ this.state.description }</Text>
                </Card>
                <Card>
                    <Title level={3} color> Competências </Title>
                        <Skills title={"Habilidades Técnicas"} hardSkills={ this.state.hardSkills }/>                      
                        <Skills title={"Habilidades Interpessoais"} softSkills={ this.state.softSkills }/>                      
                        <Skills title={"Idiomas"} languages={ this.state.languages }/>                      

                </Card>
                <Card>
                    <Title level={3} color> Experiências </Title>
                    <Experiences experiences={ this.state.academicExperiences }/>
                    <Experiences work experiences={ this.state.workExperiences }/>
                </Card>
            </Content>
        </>
        
    }
}
export default ProfileCandidate;