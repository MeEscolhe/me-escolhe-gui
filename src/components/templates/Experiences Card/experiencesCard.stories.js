import React from 'react';
import ExperiencesCard from './index';

export default {
  title: ' ExperiencesCard Template Component',
  component: ExperiencesCard,
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

export const ToStorybookExperiencesCard= () => <ExperiencesCard academicExperiences={ academicExperiences } workExperiences={ workExperiences }/>;
 
ToStorybookExperiencesCard.story = {
  name: ' ExperiencesCard',
};
