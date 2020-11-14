import React from 'react';
import Selection from './index';
import { colors } from '../../../styles/colors';

export default {
  title: 'Selection Molecule Component',
  component: Selection,
};

const title="Me Escolhe" 
const description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
const labName="UFCG"

export const ToStorybookSelectionFull= () => <Selection projectName={ title } role={ "FullStack" } description={ description } labName={ labName } colors={ colors.fullstack }/>

ToStorybookSelectionFull.story = {
  name: 'Card Selection role FullStack',
};

export const ToStorybookSelectionFront = () => <Selection projectName={ title } role={ "Front-End" } description={ description } labName={ labName } colors={ colors.frontEnd }/>

ToStorybookSelectionFront.story = {
  name: 'Card Selection role Front-End',
};


export const ToStorybookSelectionBack = () => <Selection projectName={ title } role={ "Back-End" } description={ description } labName={ labName } colors={ colors.backEnd }/>

ToStorybookSelectionBack.story = {
  name: 'Card Selection role Back-End',
};

export const ToStorybookSelectionTester = () => <Selection projectName={ title } role={ "Tester" } description={ description } labName={ labName } colors={ colors.tester } />

ToStorybookSelectionTester.story = {
  name: 'Card Selection role Tester',
};