import React from 'react'
import { Title } from '../../atoms'
import { Skills, SkillsForm } from '../../organisms'
import { Card, Pencil } from './styled'
import { colors } from '../../../styles/colors'

export const SkillsCard = ({ editSkillsCard, hardSkills, softSkills, languages, onChangeSkill, onChangeEdit }) => {
    return <Card>
        <Pencil onClick={onChangeEdit} />

        <Title level={3} color> Competências </Title>

        {
            hardSkills ?
                editSkillsCard ?
                    <SkillsForm
                        title={"Habilidades Técnicas"}
                        skills={hardSkills}
                        options={[1, 2, 3, 4, 5]}
                        addSkill={(skill) => onChangeSkill('hardSkills', hardSkills, skill, true)}
                    />
                    : <Skills hardSkills={hardSkills} />
                : <></>
        }
        {
            softSkills ?
                editSkillsCard ?
                    <SkillsForm
                        title={"Habilidades Interpessoais"}
                        skills={softSkills}
                        options={[1, 2, 3, 4, 5]}
                        addSkill={(skill) => onChangeSkill('softSkills', softSkills, skill, true)}
                    />
                    : <Skills softSkills={softSkills} />
                : <></>
        }
        {
            languages ?
                editSkillsCard ?
                    <SkillsForm
                        title={"Idiomas"}
                        skills={languages}
                        options={[1, 2, 3, 4, 5]}
                        addSkill={(skill) => onChangeSkill('languages', languages, skill, true)}
                    />
                    : <Skills languages={languages} />
                : <></>
        }
        {
            !hardSkills && !softSkills && !languages ? <Title level={4} color={colors.gray} >Nenhuma Habilidade Informada</Title>
                : <></>
        }
    </Card>
}

export default SkillsCard