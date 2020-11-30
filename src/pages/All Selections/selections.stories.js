import React from 'react';
import SelectionsPage from './index';

export default {
  title: ' Selections Page',
  component: SelectionsPage,
};


export const ToStorybookSelections= () => <SelectionsPage/>;
 
ToStorybookSelections.story = {
  name: ' Selections Page',
};
