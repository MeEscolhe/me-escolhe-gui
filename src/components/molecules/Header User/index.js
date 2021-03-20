import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { HeaderProfile, User, Skills, Skill, Footer, LogoComponent, TitleComponent } from './styled'

export const Header = ({ user, teacher }) => {

  return <HeaderProfile>
    <User>
      <Avatar src={user.image} size={150} icon={<UserOutlined />} />
      <TitleComponent level={2}> {user.name} </TitleComponent>
      <TitleComponent level={5}> {user.email} </TitleComponent>
    </User>
    {!teacher && <>
      <Skills>
        <Skill>
          <TitleComponent level={4}> Soft Skills </TitleComponent>
          <TitleComponent level={2}>{user.skills.softSkills.length}</TitleComponent>
        </Skill>
        <Skill>
          <TitleComponent level={4}> Hard Skills </TitleComponent>
          <TitleComponent level={1}>{user.skills.hardSkills.length}</TitleComponent>
        </Skill>
        <Skill>
          <TitleComponent level={4}> Idiomas </TitleComponent>
          <TitleComponent level={2}>{user.skills.languages.length}</TitleComponent>
        </Skill>
      </Skills>
      <Footer>
        <LogoComponent
          size={50} >
          <TitleComponent> CRA {user.cra} </TitleComponent>
        </LogoComponent>
      </Footer>
    </>}

  </HeaderProfile>;
}

export default Header;