import React from 'react';
import Progress from './index';

export default {
  title: 'Progress Molecule Component',
  component: Progress,
};

export const ToStorybookProgressNoInit= () => 
<div>
    <Progress phase={1} status="inactive"/>
</div>

ToStorybookProgressNoInit.story = {
  name: 'Progress no init',
};

export const ToStorybookProgressDesclassified= () => 
<div>
    <Progress phase={1} status="inactive"/>
    
    <Progress phase={1} status="active"/>
    <Progress phase={1} status="success"/>

    <Progress phase={2} status="active"/>
    <Progress phase={2} status="exception"/>
</div>

ToStorybookProgressDesclassified.story = {
  name: 'Progress Desclassified',
};


export const ToStorybookProgressClassified= () => 
<div>
    <Progress phase={1} status="inactive"/>
    
    <Progress phase={1} status="active"/>
    <Progress phase={1} status="success"/>

    <Progress phase={2} status="active"/>
    <Progress phase={2} status="success"/>

    <Progress phase={3} status="active"/>
    <Progress phase={3} status="success"/>
</div>

ToStorybookProgressClassified.story = {
  name: 'Progress Classified',
};
