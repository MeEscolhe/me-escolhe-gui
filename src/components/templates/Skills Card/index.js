import React from 'react'
import { Title } from '../../atoms'
import { Skills } from '../../organisms'
import { Card } from 'antd'

export const SkillsCard = ({ hardSkills, softSkills, languages }) => {
    return <Card>
        <Title level={3} color> Competências </Title>
        <Skills hardSkills={ hardSkills }/>                      
        <Skills softSkills={ softSkills }/>                      
        <Skills languages={ languages }/>                      
    </Card>
}

export default SkillsCard