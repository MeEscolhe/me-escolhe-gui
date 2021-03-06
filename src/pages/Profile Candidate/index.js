import React from 'react'
import { HeaderUser } from '../../components/molecules'
import { SkillsCard, ExperiencesCard, AboutCard } from '../../components/templates'
import { Header, Content } from './styled'

import candidateService from '../../services/candidateService'
import user from '../../user'

class CandidateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editSkillsCard: false,
            user: {
                description: null,
                name: null,
                email: null,
                soft: 0,
                hard: 0,
                language: 0,
                cra: 0,
                image: '',
                skills: {
                    hardSkills: [],
                    softSkills: [],
                    languages: [],
                },
                experiences: {
                    academic: [],
                    work: [],
                }
            }
        }
    }

    componentDidMount() {
        candidateService.getCandidate(user.getID()).then(data => {
            console.log(data)
            this.setState({
                user: {
                    description: data.description,
                    name: data.name,
                    email: data.email,
                    cra: data.cra,
                    image: '',
                    skills: data.skills,
                    experiences: data.experiences[0]
                }
            })
        })

    }
    onChangeDescription = (event) =>
        this.setState({ user: { ...this.state.user, description: event.target.value } });

    onChangeSkill = (type, skills, skill, add) => {

        add ? skills.push(skill) : skills = skills.filter((skillData) => skillData.name !== skill.name);

        this.setState({
            user: {
                ...this.state.user, skills: {
                    ...this.state.user.skills,
                    [type]: skills
                }
            }
        });

    }
    onChangeEdit = () => this.setState({ editSkillsCard: !this.state.editSkillsCard });
    render() {
        return <>
            <Header>
                <HeaderUser user={this.state.user} />
            </Header>
            <Content>
                <AboutCard
                    description={this.state.user.description}
                    onChangeDescription={this.onChangeDescription}
                />
                {
                    this.state.user.skills ?
                        <SkillsCard
                            editSkillsCard={this.state.editSkillsCard}
                            hardSkills={this.state.user.skills.hardSkills}
                            softSkills={this.state.user.skills.softSkills}
                            languages={this.state.user.skills.languages}
                            onChangeSkill={this.onChangeSkill}
                            onChangeEdit={this.onChangeEdit}
                        />
                        :
                        <></>
                }

                {

                    this.state.user.experiences ?
                        <ExperiencesCard
                            workExperiences={this.state.user.experiences.work}
                            academicExperiences={this.state.user.experiences.academic} />
                        :
                        <></>

                }

            </Content>
        </>

    }
}
export default CandidateProfile;