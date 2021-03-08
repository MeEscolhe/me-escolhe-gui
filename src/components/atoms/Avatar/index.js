import React from 'react'
import { LogoComponent, IconComponent } from './styled'

import {ReactComponent as Logo} from '../../../styles/images/logo/Logo.svg'

export const Avatar = ({size, color, logo}) => {
  return <IconComponent size={size} component={logo ? logo : Logo} style={{ color: color }}/>
}

export default Avatar;