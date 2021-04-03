import React from 'react'
import { Title } from '../../atoms'
import { Content, Header, TimeLine, Experience, Details, TitleComponent } from './styled'
import { colors } from '../../../styles/colors'
import moment from 'moment'

export const Experiences = ({academicExperiences=[], workExperiences=[] }) => {

    const title = workExperiences ? "Profissional" : "Acadêmica"  
    
    const duration = (date) => {    
        date = moment(date)
        return date.format("MMM") + " de " + date.format("YYYY")
    }

    const isEmpty = () => {
        if(academicExperiences) 
            return academicExperiences.lenth > 0 
        if(workExperiences) 
            return workExperiences.lenth > 0
        return false
    }

    const listExperience = workExperiences ? 
        workExperiences.map((experience) => {
            return <Experience color={ colors.pink }>
                <Details>
                    <TitleComponent level={4} color>{ experience.role }</TitleComponent>
                    <TitleComponent level={5} color={ colors.gray }>{ experience.institution }</TitleComponent>
                    <TitleComponent level={5} color={ colors.gray }>Duração de { duration(experience.initialDate) } até { duration(experience.finalDate) }</TitleComponent>
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
                    <TitleComponent level={5} color={ colors.gray }>Duração de { duration(experience.initialDate) } até { duration(experience.finalDate) } </TitleComponent>
                </Details>
            </Experience>
        })

    return <Content>
        <Header>
            {   isEmpty ?
                    <Title level={3} color={ colors.pink }>{ title }</Title>
                : <></>
            }
        </Header>
        <TimeLine mode="alternate">
            { listExperience }
        </TimeLine>
    </Content>
}
export default Experiences;