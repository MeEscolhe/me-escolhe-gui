import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { Menu } from './components/templates'
import { route } from './routes'
import * as serviceWorker from './serviceWorker'
import { AllSelections, CandidateSelections, CandidateProfile, CandidateProjectProfile, ProjectProfile } from './pages';

const user = {
  name: "Sheilla da Silva",
  email: "sheilla.silva@teste.com",
  image: "https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.0-9/107065226_3160359924018706_6230635106728147226_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=s2dirxK1HDgAX_4KAdA&_nc_ht=scontent.fjdo10-2.fna&oh=82c1a4b907bdd6c641671bab8ffb106e&oe=5FABD24E"
}

const selections = [
  {
      projectName: 'Me Escolhe',
      job: 'Default',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      labName:'UFCG'
  },
  {
      projectName: 'Me Escolhe',
      job: 'FullStack',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      labName:'UFCG'
  },
  {
      projectName: 'Me Escolhe',
      job: 'Back-End',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      labName:'UFCG'
  },
  {
      projectName: 'Me Escolhe',
      job: 'Front-End',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      labName:'UFCG'
  },
  {
      projectName: 'Me Escolhe',
      job: 'Tester',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
      labName:'UFCG'
  },
]

ReactDOM.render(
  <Router>
    <Menu user={ user }/>
    <Switch>
      <Route path={ route.userProfile }>
        <CandidateProfile/>
      </Route>
      <Route path={ route.userSelection }>
        <CandidateProjectProfile/>
      </Route>
      <Route path={ route.projectProfile }>
        <ProjectProfile/>
      </Route>
      <Route path={ route.selections }>
        <AllSelections title={ "Seleções" } selections={ selections }/>
      </Route>
      <Route 
        path={ route.userSelections }>
        <CandidateSelections title={ "Minhas Seleções" } selections={ selections }/>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
