import React, { useState } from 'react'
import CardStatus from './index'
import { Button } from '../../atoms'

export default {
  title: 'Card Status Molecule Component',
  component: CardStatus,
};

const message = "Aguarde e tente novamente em alguns instantes!"

const Success = () => {
  const [open, setOpen] = useState(false)

  return<>
    {  open ?
        <CardStatus title={"Sucesso"} message={message} onClick={() => setOpen(false)}/> :
        <Button onClick={() => setOpen(true)}>Open Card Success</Button>
    }
  </>
}

export const ToStorybookCard = () => <Success/>;

ToStorybookCard.story = {
  name: 'Card Success',
}



const Error = () => {
  const [open, setOpen] = useState(false)

  return<>
    {  open ?
        <CardStatus error title={"Error"} message={message} onClick={() => setOpen(false)}/> :
        <Button onClick={() => setOpen(true)}>Open Card Error</Button>
    }
  </>
}

export const ToStorybookCardError = () => <Error/>;

ToStorybookCardError.story = {
  name: 'Card Error',
}