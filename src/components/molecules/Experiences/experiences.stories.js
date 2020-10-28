import React from 'react'
import Experiences from './index'

export default {
  title: 'Experiences Molecule Component',
  component: Experiences,
};
const experiences = [
    {
        title: "Graduanda em Computação",
        category: "Graduação",
        institution: "UFCG",
        duration: "10"  
    },
    {
        title: "Graduanda em Computação",
        category: "Graduação",
        institution: "UFCG",
        duration: "10"  
    },
    {
        title: "Graduanda em Computação",
        category: "Graduação",
        institution: "UFCG",
        duration: "10"  
    },
]

const workExperiences = [
    {
        role: "Graduanda em Computação",
        institution: "UFCG",
        duration: "10"  
    },
    {
        role: "Graduanda em Computação",
        institution: "UFCG",
        duration: "10"  
    },
    {
        role: "Graduanda em Computação",
        institution: "UFCG",
        duration: "10"  
    },
    {
        role: "Graduanda em Computação",
        institution: "UFCG",
        duration: "10"  
    },
   
]
export const ToStorybookAcademicExperiences= () => <Experiences experiences={ experiences }/>


ToStorybookAcademicExperiences.story = {
  name: 'Academic Experiences',
};

export const ToStorybookWorkExperiences= () => <Experiences work experiences={ workExperiences }/>


ToStorybookWorkExperiences.story = {
  name: 'Work Experiences',
};
