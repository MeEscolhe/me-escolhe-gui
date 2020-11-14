import React, { useState } from 'react'
import ModalSelection from './index'
import { Button } from '../../atoms'

export default {
  title: 'Modal Selection Molecule Component',
  component: ModalSelection,
};

const title="Nome do Projeto"
const role="Vaga"
const labName="UFCG"

const ModalSelections = () => {
  const [open, setOpen] = useState(false)

  return<>
        <Button onClick={() => setOpen(true)}>Open Modal Selection</Button>
        <ModalSelection
          projectName={ title } 
          role={ role }
          labName={ labName } 
          visible={ open }
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}/>
      </>
}

export const ToStorybookModalSelections = () => <ModalSelections/>;

ToStorybookModalSelections.story = {
  name: 'Modal Selections',
};
