import React from 'react';
import Tag from './index';

export default {
  title: 'Tag Atom Component',
  component: Tag,
};

const colors = {
    primary: "#FF4BA7",
    secundary: "#FFDA64",
    icon: "#ffeeb6"
}
export const ToStorybookTag= () => <Tag color={colors}> Exemplo </Tag>;
 
ToStorybookTag.story = {
  name: ' Tag ',
};
