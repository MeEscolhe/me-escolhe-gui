import React from 'react'
import { Title } from '../../atoms'
import { Experiences } from '../../molecules'
import { Card } from 'antd'

export const ExperiencesCard = ({ academicExperiences, workExperiences }) => {
    return <Card>
        <Title level={3} color> Experiências </Title>
        <Experiences academicExperiences={ academicExperiences }/>
        <Experiences workExperiences={ workExperiences }/>
    </Card>
}

export default ExperiencesCard