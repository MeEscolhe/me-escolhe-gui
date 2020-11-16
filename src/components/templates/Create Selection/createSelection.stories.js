import React, { useState } from 'react'
import CreateSelection from './index'
import { Button } from '../../atoms'
import { color } from '../../../styles/colors'

export default {
    title: 'Create Selection Template Compoent',
    component: CreateSelection,
};

const projectName="Nome do Projeto"
const role="Default"
const labName="UFCG"

const CreateSelectionExample = () => {
  const [open, setOpen] = useState(true)

  return<>
        <Button onClick={() => setOpen(true)}>Open Create Selection</Button>
        <CreateSelection 
            visible={ open }
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            labName={ labName } 
            projectName={ projectName }
            color={ color(role) }
        />
      </>
}

export const ToStorybookCreateSelection = () => <CreateSelectionExample/>

ToStorybookCreateSelection.story = {
    name: 'Create Selection'
}
