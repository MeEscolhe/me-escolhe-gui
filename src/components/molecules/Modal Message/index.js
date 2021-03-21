import React from 'react'
import { ModalMolecule } from './styled'
import { Title, Text, ButtonLink } from '../../atoms'

export const ModalMessage = ({ title, message, visible, onOk, onCancel, ...props }) => {
  return <>
    <ModalMolecule
      visible={visible}
      footer={null}
      onCancel={onCancel}
      title={<Title color='black' level={5}>{title}</Title>}
      {...props}
    >
      <Text> {message}</Text>
      <ButtonLink onClick={onOk}>Ok</ButtonLink>
    </ModalMolecule>
  </>
};

export default ModalMessage;
