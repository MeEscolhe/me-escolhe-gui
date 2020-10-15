import React from 'react';
import Menu from './index';

export default {
  title: 'Menu Template Component',
  component: Menu,
};

const user = {
    name: "Sheilla da Silva",
    email: "sheilla.silva@teste.com",
    image:"https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.0-9/107065226_3160359924018706_6230635106728147226_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=s2dirxK1HDgAX_4KAdA&_nc_ht=scontent.fjdo10-2.fna&oh=82c1a4b907bdd6c641671bab8ffb106e&oe=5FABD24E"
}
export const ToStorybookSideBarMenu = () => <Menu user={ user }/>;

ToStorybookSideBarMenu.story = {
  name: 'Menu',
};