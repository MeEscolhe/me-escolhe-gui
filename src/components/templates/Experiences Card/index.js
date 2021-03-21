import React from 'react'
import { Title } from '../../atoms'
import { Experiences } from '../../molecules'
import { ExperiencesForm } from '../../organisms'
import { Card, Pencil } from './styled'

export const ExperiencesCard = ({ 
    academicExperiences, 
    workExperiences,
    editExperienceCard,
    onChangeEditExperienceCard,

}) => {
    return <Card>
        <Pencil onClick={() => onChangeEditExperienceCard(!editExperienceCard)} />
        <Title level={3} color> Experiências </Title>
        {
            editExperienceCard 
            ? 
                <>
                    <ExperiencesForm type={'Academic'} experiences={academicExperiences} />
                    <ExperiencesForm type={'Work'} experiences={workExperiences} />
                </>
            : 
                <>
                    <Experiences academicExperiences={ academicExperiences }/>
                    <Experiences workExperiences={ workExperiences }/>
                </>
        }
    </Card>
}

export default ExperiencesCard