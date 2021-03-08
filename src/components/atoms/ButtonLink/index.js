import React from 'react';
import { ButtonAtom } from './styled';

export const ButtonLink = ({color, backgroundColor, onClick, ...props}) => {
  return <ButtonAtom color={ color } backgroundColor={backgroundColor} type="link" shape="omitted" onClick={ onClick } {...props} />;
}

export default ButtonLink;
