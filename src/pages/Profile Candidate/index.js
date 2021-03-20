import React from 'react'
import { HeaderUser } from '../../components/molecules'
import { SkillsCard, ExperiencesCard, AboutCard } from '../../components/templates'
import { Header, Content, ButtonContainer } from './styled'
import { Button } from '../../components/atoms'
import candidateService from '../../services/candidateService'
import user from '../../user'

class CandidateProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editSkillsCard: false,
            editAboutCard: false,
            activeSaveButton: false,
            user: {
                registration: '',
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

            this.setState({
                user: {
                    registration: data.registration,
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

    onChangeSkill = (skills, save) => {
        save ?
            this.setState({ editSkillsCard: false })
            :
            this.setState({ user: { ...this.state.user, skills } });

    }
    onChangeEdit = () => this.setState({ editSkillsCard: !this.state.editSkillsCard, activeSaveButton: true });
    onChangeEditAboutCard = () => this.setState({ editAboutCard: !this.state.editAboutCard, activeSaveButton: true });

    onChangeUpdateData = () => {
        this.setState({ editSkillsCard: false, editAboutCard: false },
            () =>
                candidateService.updateCandidate(this.state.user)
        );

    }
    render() {
        console.log(this.state.user.skills);
        return <>
            <Header>
                <HeaderUser user={this.state.user} />
            </Header>
            <Content>
                <AboutCard
                    editAboutCard={this.state.editAboutCard}
                    onChangeEditAboutCard={this.onChangeEditAboutCard}
                    description={this.state.user.description}
                    onChangeDescription={this.onChangeDescription}
                />
                {
                    this.state.user.skills ?
                        <SkillsCard
                            editSkillsCard={this.state.editSkillsCard}
                            propsSkills={{
                                hardSkills: this.state.user.skills.hardSkills,
                                softSkills: this.state.user.skills.softSkills,
                                languages: this.state.user.skills.languages
                            }}
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
                {this.state.activeSaveButton &&
                    <ButtonContainer>
                        <Button onClick={this.onChangeUpdateData}>Salvar</Button>
                    </ButtonContainer>
                }
            </Content>

        </>

    }
}
export default CandidateProfile;