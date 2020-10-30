import React from 'react'
import { Title } from '../../atoms'
import { Content, Header, TimeLine, Experience, Details, TitleComponent } from './styled'
import { colors } from '../../../styles/colors'

export const Experiences = ({academicExperiences, workExperiences }) => {
    const title = workExperiences ? "Profissional" : "Acadêmica"
    
    const listExperience = workExperiences ? 
    workExperiences.map((experience) => {
            return <Experience color={ colors.pink }>
                <Details>
                    <TitleComponent level={4} color>{ experience.role }</TitleComponent>
                    <TitleComponent level={5} color={ colors.gray }>{ experience.institution }</TitleComponent>
                    <TitleComponent level={5} color={ colors.gray }>Duração de { experience.duration } meses</TitleComponent>
                </Details>
            </Experience>
        })
    :    
    academicExperiences.map((experience) => {
            return <Experience color={ colors.pink }>
                <Details>
                    <TitleComponent level={4} color>{ experience.title }</TitleComponent>
                    <TitleComponent level={5} color={ colors.gray }>{ experience.category }</TitleComponent>
                    <TitleComponent level={5} color={ colors.gray }>{ experience.institution }</TitleComponent>
                    <TitleComponent level={5} color={ colors.gray }>Duração de { experience.duration } meses</TitleComponent>
                </Details>
            </Experience>
        })

    return <Content>
        <Header>
            <Title level={3} color={ colors.pink }>{ title }</Title>
        </Header>
        <TimeLine mode="alternate">
            { listExperience }
        </TimeLine>
    </Content>
}
export default Experiences;