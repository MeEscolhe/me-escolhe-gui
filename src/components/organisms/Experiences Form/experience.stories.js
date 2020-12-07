import React from 'react';
import ExperiencesForm from './index';

export default {
  title: 'Experiences Form Organisms Component',
  component: ExperiencesForm,
};

export const ToStorybookHardExperiencesForm = () => <ExperiencesForm />;
 
ToStorybookHardExperiencesForm.story = {
  name: 'Work Experiences Form',
};

export const ToStorybookHardAcademicExperiencesForm = () => <ExperiencesForm type="Academic"/>;
 
ToStorybookHardAcademicExperiencesForm.story = {
  name: 'Academic Experiences Form',
};