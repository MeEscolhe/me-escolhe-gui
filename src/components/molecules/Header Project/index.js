import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { HeaderProfile, Content, Footer, TitleComponent } from './styled'

export const HeaderProject = ({ image, role, project }) => {
  return <HeaderProfile>
      <Content>
        <Avatar src={ image ? image : "" } size={150} icon={ <UserOutlined /> }/>
        <TitleComponent level={2}> { project ? project.name : "" } </TitleComponent>
        <TitleComponent level={5}> { project.lab ? project.lab.name : "" } </TitleComponent>
      </Content>
      <Footer>
        <TitleComponent level={4}> { role ? role : "" } </TitleComponent>        
      </Footer>
  </HeaderProfile>;
}

export default HeaderProject;