import React from 'react'
import Experiences from './index'

export default {
  title: 'Experiences Molecule Component',
  component: Experiences,
};
const academicExperiences = [
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

export const ToStorybookAcademicExperiences= () => <Experiences academicExperiences={ academicExperiences }/>


ToStorybookAcademicExperiences.story = {
  name: 'Academic Experiences',
};

export const ToStorybookWorkExperiences= () => <Experiences workExperiences={ workExperiences }/>


ToStorybookWorkExperiences.story = {
  name: 'Work Experiences',
};
