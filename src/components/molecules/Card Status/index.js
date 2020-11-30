import React from 'react'
import { CardMolecule, Icon } from './styled'
import { Title, Text, Button } from '../../atoms'
import { colors } from '../../../styles/colors'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

export const CardStatus = ({title, message, error, onClick, ...props}) => {
  const color = error ? colors.red : colors.green
  return <>
        <CardMolecule
            hoverable
            {...props}
        >
            <Title color level={5}>{ title }</Title>
            { error ? 
            <Icon error size={64} icon={<CloseCircleOutlined />}/>
            
            : <Icon gap={0} size={64} icon={<CheckCircleOutlined />}/>
            }
            <Text> { message }</Text>
            <Button color={ color } onClick={ onClick }>Continue</Button>
        </CardMolecule>
  </>
};

export default CardStatus;
