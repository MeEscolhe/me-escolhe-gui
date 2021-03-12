import React from 'react'
import { CardMolecule } from './styled'
import { Title, Text, ButtonLink } from '../../atoms'

export const CardError = ({error, message, onClick, ...props}) => {
  return <>
        <CardMolecule
            hoverable
            {...props}
        >
            <Title color='black' level={5}>{ error }</Title>
            <Text> { message }</Text>
            <ButtonLink onClick={ onClick }>Ok, Entendi</ButtonLink>
        </CardMolecule>
  </>;
};

export default CardError;
