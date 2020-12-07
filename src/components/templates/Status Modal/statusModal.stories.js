import React, { useState } from 'react'
import StatusModal from './index'
import { Button } from '../../atoms'

export default {
  title: 'Status Modal Template',
  component: StatusModal,
};

const message = "Aguarde e tente novamente em alguns instantes!"

const Success = () => {
  const [open, setOpen] = useState(false)

  return<>
    {  open ?
        <StatusModal visible={open} title={"Success"} message={message} onClick={() => setOpen(false)} /> :
        <Button onClick={() => setOpen(true)}>Open Card Success</Button>
    }
  </>
}

export const ToStorybookCard = () => <Success/>;

ToStorybookCard.story = {
  name: 'Modal Status Success',
}

const Error = () => {
  const [open, setOpen] = useState(false)

  return<>
    {  open ?
        <StatusModal visible={open} error title={"Error"} message={message} onClick={() => setOpen(false)} /> :
        <Button onClick={() => setOpen(true)}>Open Card Error</Button>
    }
  </>
}

export const ToStorybookCardError = () => <Error/>;

ToStorybookCardError.story = {
  name: 'Modal Status Error',
}