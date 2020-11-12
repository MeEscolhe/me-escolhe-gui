import React from 'react'
import { Title, Input, Button } from '../../atoms'
import { ModalSelection } from '../../molecules'
import { 
    Form,
    HeaderForm, 
    ItemForm,
    Legend} from './styled'

export const Apply = ({visible, colors, onCancel, onOk, projectName, labName}) => {
    return <>
        <ModalSelection
            projectName={ projectName }
            labName={ labName }
            visible={ visible }
            colors={ colors }
            onCancel={ onCancel }
            onOk={ onOk }
        >
            <Form>
                <HeaderForm>
                    <Title color level={4}>Formulário de Candidatura</Title>
                </HeaderForm>  
                <ItemForm>
                    <Input size="large" placeholder="Nome Completo"/>
                </ItemForm>
                <ItemForm>
                    <Input size="large" placeholder="E-mail"/>
                </ItemForm>
            </Form>    
            <Legend>
                <Button color={ colors.icon } onClick={ onOk }>Candidatar</Button>
            </Legend>
        </ModalSelection>
  </>
}

export default Apply