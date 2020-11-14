import React from 'react'
import { Title, Button } from '../../atoms'
import { ModalSelection } from '../../molecules'
import { 
    Form,
    HeaderForm, 
    InputForm,
    Legend} from './styled'
import { colors } from '../../../styles/colors'

export const CreateSelection = ({visible, color, onCancel, onOk, projectName, labName}) => {
    return <>
        <ModalSelection
            projectName={ projectName }
            labName={ labName }
            visible={ visible }
            color={ color }
            onCancel={ onCancel }
            onOk={ onOk }
        >
            <Form>
                <HeaderForm>
                    <Title color level={4}>Criar Seleção</Title>
                </HeaderForm>  
                <InputForm size="large" placeholder="Vaga"/>
                <InputForm size="large" placeholder="Descrição"/>
                <Title color={ colors.gray } level={5}>Habilidades</Title>
            </Form>    
            <Legend>
                <Button color={ color.icon } onClick={ onOk }>Candidatar</Button>
            </Legend>
        </ModalSelection>
  </>
}

export default CreateSelection