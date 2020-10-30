import React from 'react';
import SkillsCard from './index';

export default {
  title: ' SkillsCard Template Component',
  component: SkillsCard,
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

export const ToStorybookSkillsCard= () => <SkillsCard 
    hardSkills={ hardSkills } 
    softSkills={ softSkills}
    languages={ languages }/>;
 
ToStorybookSkillsCard.story = {
  name: ' SkillsCard',
};
