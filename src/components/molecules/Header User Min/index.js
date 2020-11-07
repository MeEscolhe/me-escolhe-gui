import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Header, User, TitleComponent } from './styled'

export const HeaderMin = ({ name, email, image, ...props }) => {
  return <Header>
        <Avatar src={image} size={130} icon={ <UserOutlined /> }/>
        <User>
            <TitleComponent level={2}> { name } </TitleComponent>
            <TitleComponent level={5}> { email } </TitleComponent>
        </User>
  </Header>;
}

export default HeaderMin;