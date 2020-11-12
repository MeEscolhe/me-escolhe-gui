import React from 'react'
import { Avatar } from '../../atoms'
import { 
    ModalMolecule, 
    TitleComponent,
    Header, 
    DataHeader} from './styled'

export const ModalSelection = ({projectName, colors, labName, visible, onOk, onCancel, ...props}) => {
  return <ModalMolecule
            visible={ visible }
            footer={null}
            primary={ colors.primary }
            secundary={ colors.secundary }
            onCancel={ onCancel }
            title={
            <Header
                primary={ colors.primary }
                secundary={ colors.secundary }
            >
                <Avatar colors={ colors }/>            
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
