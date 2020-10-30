import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { HeaderProfile, Content, Footer, TitleComponent } from './styled'

export const HeaderProject = ({ project }) => {
  return <HeaderProfile>
      <Content>
        <Avatar src={ project.image } size={150} icon={ <UserOutlined /> }/>
        <TitleComponent level={2}> { project.name } </TitleComponent>
        <TitleComponent level={5}> { project.labName } </TitleComponent>
      </Content>
      <Footer>
        <TitleComponent level={4}> { project.role } </TitleComponent>        
      </Footer>
  </HeaderProfile>;
}

export default HeaderProject;