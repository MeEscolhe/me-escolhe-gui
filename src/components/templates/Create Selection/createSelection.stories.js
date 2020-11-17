import React, { useState } from 'react'
import CreateSelection from './index'
import { Button } from '../../atoms'
import { color } from '../../../styles/colors'

export default {
    title: 'Create Selection Template Compoent',
    component: CreateSelection,
};

const project={
    selections: [],
    _id: "5fb0337c06ac7005ec506672",
    name: "Projeto UFCG genérico",
    description: "Um projeto da UFCG voltado para testes de API",
    
}
const role="Default"
const lab={
    description: "Ateliê de computação",
    _id: "5fb0332a06ac7005ec506671",
    name: "Compcult",
}

const CreateSelectionExample = () => {
  const [open, setOpen] = useState(true)

  return<>
        <Button onClick={() => setOpen(true)}>Open Create Selection</Button>
        <CreateSelection 
            visible={ open }
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            lab={ lab } 
            project={ project }
            color={ color(role) }
        />
      </>
}

export const ToStorybookCreateSelection = () => <CreateSelectionExample/>

ToStorybookCreateSelection.story = {
    name: 'Create Selection'
}
