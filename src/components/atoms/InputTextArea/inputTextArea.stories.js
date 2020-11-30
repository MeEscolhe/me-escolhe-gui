import React from 'react';
import InputTextArea from './index';

export default {
  title: 'Input Text Area Atom Component',
  component: InputTextArea,
};

export const ToStorybookInput = () => <InputTextArea />;

ToStorybookInput.story = {
  name: 'Input Text Area',
};
