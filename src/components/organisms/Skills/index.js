import React from 'react'
import { Tag, Title } from '../../atoms'
import { skillLevel, colors } from '../../../styles/colors'
import { Content, Header, LogoComponent, Level } from './styled'

export const TagList = ({ hardSkills, softSkills, languages }) => {
    const title = hardSkills ? "Habilidades Técnicas" 
    : softSkills ? "Habilidades Interpessoais" 
    : "Idiomas"

    const skills = hardSkills ? hardSkills 
    : softSkills ? softSkills 
    : languages
    
    const levels = hardSkills ? [1, 2, 3, 4, 5] 
    : languages ? [1, 2, 3] : []

    const legendHardSkills = levels.map((level) => {
        return <Level>
                    <Title color level={5}> Nível </Title>
                    <LogoComponent 
                        size={20} 
                        color={skillLevel(level)}
                    > {level} </LogoComponent>
                </Level>
    }) 
    
    const tagSkills = skills.map((skill) => {
            return <Tag color={ skillLevel(skill.level) }>{ skill.name }</Tag>
    })

    return <Content> 
        {
        hardSkills || languages
        ? 
            <Header>
                <Title level={4} color={ colors.pink }>{ title }</Title> 
                { legendHardSkills }
            </Header>
        : 
            <Header>
                <Title level={4} color={ colors.pink }>{ title }</Title> 
            </Header>
        } 
    { tagSkills }
    </Content>
}
export default TagList;