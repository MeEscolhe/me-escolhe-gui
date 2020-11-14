import React from 'react'
import { LogoComponent } from './styled'
import Icon from '@ant-design/icons'
import {ReactComponent as Logo} from '../../../styles/images/logo/Logo.svg'

export const Avatar = ({size, color, logo}) => {
  return <LogoComponent 
            size={size ? size: 64} 
            icon={
                <Icon component={logo ? logo : Logo} style={{ color: color }}/>
            } />
}

export default Avatar;