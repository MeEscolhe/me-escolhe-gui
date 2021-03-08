import React from 'react';
import { TextAtom } from './styled';

export const Text = ({color, ...props}) => {
  return <TextAtom color={color} {...props}/>;
}

export default Text;
