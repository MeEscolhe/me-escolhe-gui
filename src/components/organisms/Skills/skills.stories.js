import React from 'react';
import Skills from './index';

export default {
  title: 'Skills Atom Component',
  component: Skills,
};

const hardSkills = [
    {
        name: "Java",
        level: 1,
    },
    {
        name: "Java",
        level: 2,
    },
    {
        name: "Java",
        level: 3,
    },
    {
        name: "Java",
        level: 4,
    },
    {
        name: "Java",
        level: 5,
    },

]

export const ToStorybookSkills= () => <Skills hardSkills={ hardSkills }/>;
 
ToStorybookSkills.story = {
  name: ' Skills ',
};
