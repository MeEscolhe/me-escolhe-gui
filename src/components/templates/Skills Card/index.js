import React from 'react'
import { Title } from '../../atoms'
import { Skills } from '../../organisms'
import { Card } from 'antd'
import { colors } from '../../../styles/colors'

export const SkillsCard = ({ hardSkills, softSkills, languages }) => {
    return <Card>
        
        <Title level={3} color> Competências </Title>

        {
            hardSkills ? <Skills hardSkills={ hardSkills }/>                      
            : <></>
        }
        {
            softSkills ? <Skills softSkills={ softSkills }/> 
            : <></>
        }
        {
            languages ?  <Skills languages={ languages }/> 
            : <></>                     
        }
        {
            !hardSkills && !softSkills && !languages ?  <Title level={4} color={colors.gray} >Nenhuma Habilidade Informada</Title> 
            : <></>                     
        }               
    </Card>
}

export default SkillsCard