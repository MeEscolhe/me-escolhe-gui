import React from 'react'
import { Title, Text, Button } from '../../atoms'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { ModalMolecule, Icon, Legend } from './styled'

import { colors } from '../../../styles/colors'

export const StatusModal = ({title, message, error, visible, onCancel, onClick, ...props}) => {
  const color = error ? colors.red : colors.green
  return <>
        <ModalMolecule
            visible={ visible }
            footer={null}
            closable={false}
        >
            <Title color level={3}>{ title }</Title>
            { error ? 
            <Icon error size={64} icon={<CloseCircleOutlined />}/>
            
            : <Icon gap={0} size={64} icon={<CheckCircleOutlined />}/>
            }
            <Text> { message }</Text>
            <Legend>
              <Button color={ color } onClick={ onClick }>Continue</Button>
            </Legend>
        </ModalMolecule>
  </>
};

export default StatusModal;
