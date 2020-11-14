import React from 'react'
import { Avatar } from '../../atoms'
import { 
    ModalMolecule, 
    TitleComponent,
    Header, 
    DataHeader} from './styled'
import { color } from '../../../styles/colors';

export const ModalSelection = ({projectName, role, labName, visible, onOk, onCancel, ...props}) => {
    const colors = color(role)

    return <ModalMolecule
            visible={ visible }
            footer={null}
            primary={ colors.primary }
            secundary={ colors.secundary }
            onCancel={ onCancel }
            title={
            <Header>
                <Avatar color={ colors.icon }/>            
                <DataHeader>
                    <TitleComponent level={2}>{ projectName }</TitleComponent>
                    <TitleComponent level={5}>{ labName }</TitleComponent>
                </DataHeader>
            </Header>
            }
            {...props}
        />
};

export default ModalSelection;
