import React from 'react';
import { TitleAtom } from './styled';

export const Title = ({color, ...props}) => {
  return <TitleAtom color={color} {...props}/>
}

export default Title
