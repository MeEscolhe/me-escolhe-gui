import React, { useEffect, useState } from 'react'
import { Title, Button } from '../../atoms'
import { Skills, SkillsForm, } from '../../organisms'
import { Card, Pencil, ButtonsContainer } from './styled'
import { colors } from '../../../styles/colors'

export const SkillsCard = ({
    editSkillsCard,
    propsSkills,
    onChangeSkill,
    onChangeEdit
}) => {
    const [localSkills, setLocalSkills] = useState({ hardSkills: [], softSkills: [], languages: [] });

    useEffect(() => {
        setLocalSkills(propsSkills);

    }, [propsSkills, editSkillsCard]);

    const onLocalChangeSkill = (type, skills, skill, add) => {
        add ? skills.push(skill) :
            skills = skills.filter((skillData) => skillData.name !== skill.name);
        setLocalSkills({ ...localSkills, [type]: skills })
    }

    return <Card>
        <Pencil onClick={onChangeEdit} />

        <Title level={3} color> Competências </Title>

        {
            localSkills.hardSkills ?
                editSkillsCard ?
                    <SkillsForm
                        title={"Habilidades Técnicas"}
                        skills={localSkills.hardSkills}
                        options={[1, 2, 3, 4, 5]}
                        addSkill={(skill) => onLocalChangeSkill('hardSkills', localSkills.hardSkills, skill, true)}
                    />
                    : <Skills hardSkills={localSkills.hardSkills} />
                : <></>
        }
        {
            localSkills.softSkills ?
                editSkillsCard ?
                    <SkillsForm
                        title={"Habilidades Interpessoais"}
                        skills={localSkills.softSkills}
                        addSkill={(skill) => onLocalChangeSkill('softSkills', localSkills.softSkills, skill, true)}
                    />
                    : <Skills softSkills={localSkills.softSkills} />
                : <></>
        }
        {
            localSkills.languages ?
                editSkillsCard ?
                    <SkillsForm
                        title={"Idiomas"}
                        skills={localSkills.languages}
                        options={[1, 2, 3]}
                        addSkill={(skill) => onLocalChangeSkill('languages', localSkills.languages, skill, true)}
                    />
                    : <Skills languages={localSkills.languages} />
                : <></>
        }
        {
            !localSkills.hardSkills && !localSkills.softSkills && !localSkills.languages ? <Title level={4} color={colors.gray} >Nenhuma Habilidade Informada</Title>
                : <></>
        }
        {editSkillsCard && <ButtonsContainer>
            <Button>Salvar</Button> <Button>Cancelar</Button>
        </ButtonsContainer>}
    </Card>
}

export default SkillsCard