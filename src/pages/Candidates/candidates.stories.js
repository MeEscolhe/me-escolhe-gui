import React from 'react';
import Candidates from './index';

export default {
  title: ' Candidates Page',
  component: Candidates,
};

const data = [
    {
        name: "Sheilla da Silva",
        email: "sheilla.silva@example.com"
    },
    {
        name: "Sheilla da Silva",
        email: "sheilla.silva@example.com"
    },
    {
        name: "Sheilla da Silva",
        email: "sheilla.silva@example.com"
    },
    {
        name: "Sheilla da Silva",
        email: "sheilla.silva@example.com"
    },
    {
        name: "Sheilla da Silva",
        email: "sheilla.silva@example.com"
    },
    {
        name: "Sheilla da Silva",
        email: "sheilla.silva@example.com"
    },
]

const project = {
    name: 'História da Apple',
    labName: 'Apple',
    role: 'FullStack',
    image: 'https://i.pinimg.com/originals/92/b4/fa/92b4fa6d36f08759306310acb5ecb219.jpg'
}

export const ToStorybookCandidates= () => <Candidates project={ project } candidates={ data }/>;
 
ToStorybookCandidates.story = {
  name: ' Candidates',
};
