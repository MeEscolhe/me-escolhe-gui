import React from 'react'
import { CardMolecule } from './styled'
import { Title, Text, ButtonLink } from '../../atoms'

export const CardMessage = ({title, message, onClick, ...props}) => {
  return <>
        <CardMolecule
            hoverable
            {...props}
        >
            <Title color='black' level={5}>{ title }</Title>
            <Text> { message }</Text>
            <ButtonLink onClick={ onClick }>Ok</ButtonLink>
        </CardMolecule>
  </>
};

export default CardMessage;
