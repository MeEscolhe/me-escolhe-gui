import React, { useState } from 'react'
import ModalMessage from './index'

export default {
  title: 'Modal Message Molecule Component',
  component: ModalMessage,
};

const title="Ops! Tivemos um problema com o Serviço."
const message = "Aguarde e tente novamente em alguns instantes!"

const [open, setOpen] = useState(false)

export const ToStorybookModal = () => <ModalMessage title={title} message={message} visible={open} onOk={() => setOpen(false)} onClick={() => setOpen(false)}/> ;

ToStorybookModal.story = {
  name: 'Modal Message',
}
