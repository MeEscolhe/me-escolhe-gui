import React from 'react'
import { color } from '../../../styles/colors'
import { Text, Button } from '../../atoms'
import { ModalSelection } from '../../molecules'
import {
    Job, 
    Legend} from './styled'

export const Details = ({projectName, role, description, labName, visible, onOk, onCancel, ...props}) => {
    const colors = color(role)

    return <ModalSelection
            visible={ visible }
            onCancel={ onCancel }
            onOk={ onOk }
            labName={ labName }
            projectName={ projectName }
            role={ role }
        >
            <Job colors level={4}>{ role }</Job>
            <Text>{ description }</Text>
            <Legend>
                <Button colors={ colors.icon } onClick={ onOk }>Ver Detalhes</Button>
            </Legend>
        </ModalSelection>
};

export default Details;
