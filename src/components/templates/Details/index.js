import React from 'react'
import { Text, Button } from '../../atoms'
import { ModalSelection } from '../../molecules'
import {
    Job, 
    Legend} from './styled'

export const Details = ({projectName, job, description, colors, labName, visible, onOk, onCancel, ...props}) => {
  return <ModalSelection
            projectName={ projectName }
            labName={ labName }
            visible={ visible }
            colors={ colors }
            onCancel={ onCancel }
            onOk={ onOk }
        >
            <Job color level={4}>{ job }</Job>
            <Text>{ description }</Text>
            <Legend>
                <Button color={ colors.icon } onClick={ onOk }>Ver Detalhes</Button>
            </Legend>
        </ModalSelection>
};

export default Details;
