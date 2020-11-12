import React, { useState } from 'react'
import Details from './index'
import { Button } from '../../atoms'
import { color } from '../../../styles/colors';

export default {
  title: 'Details Template Component',
  component: Details,
};

const title="Nome do Projeto"
const job="Vaga"
const description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
const labName="UFCG"

const ModalDetails = () => {
  const [open, setOpen] = useState(false)

  return<>
        <Button onClick={() => setOpen(true)}>Open Details</Button>
        <Details 
          projectName={ title } 
          job={ job } 
          description={ description } 
          colors={ color(job) }
          labName={ labName } 
          visible={ open }
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}/>
      </>
}

export const ToStorybookDetails = () => <ModalDetails/>;

ToStorybookDetails.story = {
  name: 'Details',
};
