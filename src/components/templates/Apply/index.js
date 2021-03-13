import React from 'react'
import { Title, Input, Button } from '../../atoms'
import { ModalSelection } from '../../molecules'
import { 
    Form,
    HeaderForm, 
    ItemForm,
    Legend} from './styled'
import { color } from '../../../styles/colors'

export const Apply = ({visible, onCancel, onOk, labName, projectName, role}) => {
    const colorIcon = color(role)
    return <>
        <ModalSelection
            visible={ visible }
            onCancel={ onCancel }
            onOk={ onOk }
            labName={ labName }
            projectName={ projectName }
            role={ role }
        >
            <Form>
                <HeaderForm>
                    <Title color='black' level={4}>Formulário de Candidatura</Title>
                </HeaderForm>  
                <ItemForm>
                    <Input size="large" placeholder="Nome Completo"/>
                </ItemForm>
                <ItemForm>
                    <Input size="large" placeholder="E-mail"/>
                </ItemForm>
            </Form>    
            <Legend>
                <Button color={ colorIcon.icon } onClick={ onOk }>Candidatar</Button>
            </Legend>
        </ModalSelection>
  </>
}

export default Apply