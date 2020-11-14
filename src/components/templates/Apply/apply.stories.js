import React, { useState } from 'react'
import Apply from './index'
import { Button } from '../../atoms'

export default {
  title: 'Apply Template Component',
  component: Apply,
};

const title="Nome do Projeto"
const role="Vaga"
const labName="UFCG"

const ModalApply = () => {
  const [open, setOpen] = useState(false)

  return<>
        <Button onClick={() => setOpen(true)}>Open Apply</Button>
        <Apply 
          visible={ open }
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          labName={ labName } 
          projectName={ title } 
          role={ role }
          />
      </>
}

export const ToStorybookApply = () => <ModalApply/>;

ToStorybookApply.story = {
  name: 'Apply',
};
