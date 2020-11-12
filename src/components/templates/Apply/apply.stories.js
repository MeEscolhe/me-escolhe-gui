import React, { useState } from 'react'
import Apply from './index'
import { Button } from '../../atoms'
import { color } from '../../../styles/colors';

export default {
  title: 'Apply Template Component',
  component: Apply,
};

const title="Nome do Projeto"
const job="Vaga"
const labName="UFCG"

const ModalApply = () => {
  const [open, setOpen] = useState(false)

  return<>
        <Button onClick={() => setOpen(true)}>Open Apply</Button>
        <Apply 
          projectName={ title } 
          colors={ color(job) }
          labName={ labName } 
          visible={ open }
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}/>
      </>
}

export const ToStorybookApply = () => <ModalApply/>;

ToStorybookApply.story = {
  name: 'Apply',
};
