import React from 'react';
import Skills from './index';

export default {
  title: 'Skills Organisms Component',
  component: Skills,
};

const hardSkills = [
    {
        name: "Java",
        level: 1,
    },
    {
        name: "Java",
        level: 1,
    },
    {
        name: "Java",
        level: 1,
    },
    {
        name: "Java",
        level: 1,
    },
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
        level: 2,
    },
    {
        name: "Java",
        level: 2,
    },
    {
        name: "Java",
        level: 2,
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
        level: 3,
    },
    {
        name: "Java",
        level: 3,
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
        level: 4,
    },
    {
        name: "Java",
        level: 4,
    },
    {
        name: "Java",
        level: 4,
    },
    {
        name: "Java",
        level: 4,
    },
    {
        name: "Java",
        level: 5,
    },
    {
        name: "Java",
        level: 5,
    },
    {
        name: "Java",
        level: 5,
    },
    {
        name: "Java",
        level: 5,
    },
    {
        name: "Java",
        level: 5,
    },
    {
        name: "Java",
        level: 5,
    },
]
const softSkills = [
    {
        name: "Comunicação"
    },
    {
        name: "Comunicação"
    },
    {
        name: "Comunicação"
    },
    {
        name: "Comunicação"
    }
] 
const languages = [
    {
        name: "Espanhol",
        level: 1
    },
    {
        name: "Alemão",
        level: 2
    },
    {
        name: "Inglês",
        level: 3
    },
]
export const ToStorybookHardSkills= () => <Skills hardSkills={ hardSkills }/>;
 
ToStorybookHardSkills.story = {
  name: 'Hard Skills',
};

export const ToStorybookSoftSkills= () => <Skills softSkills={ softSkills }/>;
 
ToStorybookSoftSkills.story = {
  name: 'Soft Skills',
};
export const ToStorybookLanguagesSkills= () => <Skills languages={ languages }/>;
 
ToStorybookLanguagesSkills.story = {
  name: 'Languages Skills',
};