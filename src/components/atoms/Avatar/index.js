import React from 'react'
import { LogoComponent } from './styled'
import Icon from '@ant-design/icons'
import {ReactComponent as Logo} from '../../../styles/images/logo/Logo.svg'

export const Avatar = ({size, colors, logo}) => {
  return <LogoComponent 
            size={size ? size: 64} 
            icon={
                <Icon component={logo ? logo : Logo} style={{ color: colors.icon }}/>
            } />
}

export default Avatar;