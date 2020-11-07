import React from 'react'
import { TagComponent } from './styled'

export const Tag = ({color, ...props}) => {
  return <TagComponent 
            color={ color } 
            {...props}/>;
}

export default Tag;