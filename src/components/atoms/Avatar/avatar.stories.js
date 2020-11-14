import React from 'react'
import { color } from '../../../styles/colors';
import Avatar from './index'

export default {
  title: 'Avatar Atom Component',
  component: Avatar,
};

const colorDefault = color("default")

export const ToStorybookAvatars = () => <Avatar color={ colorDefault.icon }/>;

ToStorybookAvatars.story = {
  name: 'Avatar',
};
