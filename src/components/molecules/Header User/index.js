import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined, SettingOutlined } from '@ant-design/icons'
import { ButtonLink } from '../../atoms'
import { HeaderProfile, User, Config, Skills, Skill, Footer, LogoComponent, TitleComponent } from './styled'
import { colors } from '../../../styles/colors'

export const Header = ({ user }) => {
  return <HeaderProfile>
      <Config>
          <ButtonLink color={ colors.white } onClick={ () => alert("CONFIG") }><SettingOutlined/></ButtonLink>
      </Config>
      <User>
        <Avatar src={ user.image } size={150} icon={ <UserOutlined /> }/>
        <TitleComponent level={2}> { user.name } </TitleComponent>
        <TitleComponent level={5}> { user.email } </TitleComponent>
      </User>

      <Skills>
        <Skill>
            <TitleComponent level={4}> Soft Skills </TitleComponent>
            <TitleComponent level={2}>{ user.skills.softSkills.length }</TitleComponent>
        </Skill>
        <Skill>
            <TitleComponent level={4}> Hard Skills </TitleComponent>
            <TitleComponent level={1}>{ user.skills.hardSkills.length }</TitleComponent>
        </Skill>
        <Skill>
            <TitleComponent level={4}> Idiomas </TitleComponent>
            <TitleComponent level={2}>{ user.skills.languages.length }</TitleComponent>
        </Skill>
      </Skills>
      <Footer>
        <LogoComponent 
          size={50} >
          <TitleComponent> CRA { user.cra } </TitleComponent>
        </LogoComponent>
      </Footer>
        
  </HeaderProfile>;
}

export default Header;