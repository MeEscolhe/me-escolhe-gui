import React from 'react'
import { Title } from '../../atoms'
import { Experiences } from '../../molecules'
import { Card } from 'antd'

export const ExperiencesCard = ({ experiences }) => {
    return <Card>
        <Title level={3} color> Experiências </Title>
        {
            experiences?.academicExperiences ?
                <Experiences academicExperiences={ experiences.academicExperiences}/>
            : <></>
        }
        {
            experiences?.workExperiences ?
                <Experiences workExperiences={ experiences.workExperiences }/>
            : <></>
        }
    </Card>
}

export default ExperiencesCard