import React, { useState } from 'react'
import { Tag, Title, Button, Select } from '../../atoms'
import { skillLevel, colors } from '../../../styles/colors'
import { Skill, Content, InputForm, Header, Legend} from './styled'

import { PlusOutlined } from '@ant-design/icons'


export const SkillsForm = ({ title, skills=[], options, deleteSkill, addSkill }) => {
    const [skillName, setSkillName] = useState()
    const [_skillLevel, setSkillLevel] = useState()

    const tagSkills = skills.map((skill) => {
            return <Tag color={ skillLevel(skill.level) }>
                { skill.name }
            </Tag>
    })

    const add = () => {
        if(!skillName) return
        if(options)
            if(!_skillLevel) return
        
        const skill = options ? {
            name: skillName,
            level: _skillLevel
        } : { name: skillName }
        setSkillName(null)
        setSkillLevel(null)
        addSkill(skill)
        
    }

    const setName = (event) => {
        setSkillName(event.target.value)
    }

    const setLevel = (value) => {
        setSkillLevel(value)
    }

    return <Skill>
        <Title color level={5}>{ title }</Title>
        <InputForm 
            value={ skillName }
            onChange={ setName }
            allowClear={true}
            size="large" 
            placeholder={ title }/>
        {
            options ? 

            <Select
            value={ _skillLevel }
            onChange={ setLevel }
            options={ options }
            placeholder="Nível de conhecimento"/> : <></>
        }
        {
            skills.length > 0 ? 

            <Content> 
            <Header>
                <Title level={4} color={ colors.pink }>{ title }</Title> 
            </Header>
            
            { tagSkills }
            
            </Content> : <></>
        }
        
        <Legend>
            <Button 
                onClick={ add }
                icon={ <PlusOutlined /> }/>
        </Legend>
    </Skill>
       
}
export default SkillsForm;