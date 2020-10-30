import React from 'react'
import HeaderUser from './index'

export default {
  title: 'HeaderUser Molecule Component',
  component: HeaderUser,
};

const userDefault = {
  name: "Nome do Estudante",
  email: "email",
  soft: 0,
  hard: 0,
  language: 0,
  cra: 0,
  image: ""
}
const user = {
  name: "Sheilla da Silva",
  email: "sheilla.silva@teste.com",
  soft: 3,
  hard: 13,
  language: 2,
  cra: 7.5,
  image: "https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.0-9/107065226_3160359924018706_6230635106728147226_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=s2dirxK1HDgAX_4KAdA&_nc_ht=scontent.fjdo10-2.fna&oh=82c1a4b907bdd6c641671bab8ffb106e&oe=5FABD24E"
}

export const ToStorybookHeaderUserDefault= () => <HeaderUser user={ userDefault }/>

ToStorybookHeaderUserDefault.story = {
  name: 'HeaderUser Default',
};

export const ToStorybookHeaderUser= () => <HeaderUser user={ user}/>

ToStorybookHeaderUser.story = {
  name: 'HeaderUser',
};