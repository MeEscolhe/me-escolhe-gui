import React from 'react'
import HeaderProject from './index'

export default {
  title: 'HeaderProject Molecule Component',
  component: HeaderProject,
};

const project = {
    name: 'Nome do projeto',
    labName: 'Nome do Laboratório',
    role: 'Vaga'
}

const projectData = {
  name: 'História da Apple',
  labName: 'Apple',
  role: 'FullStack',
  image: 'https://i.pinimg.com/originals/92/b4/fa/92b4fa6d36f08759306310acb5ecb219.jpg'
}

export const ToStorybookHeaderProject= () => <HeaderProject project={ project }/>

ToStorybookHeaderProject.story = {
  name: 'HeaderProject Default',
};

export const ToStorybookHeaderProjectData= () => <HeaderProject project={ projectData }/>

ToStorybookHeaderProjectData.story = {
  name: 'HeaderProject Data',
};