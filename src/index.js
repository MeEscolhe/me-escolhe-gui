import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { SelectionsPage, CandidateProfile, CandidateProjectProfile, ProjectProfile } from './pages';
import * as serviceWorker from './serviceWorker';

const selections = [
  {
      projectName: "Me Escolhe",
      job: "Default",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
      labName:"UFCG",
  },
  {
      projectName: "Me Escolhe",
      job: "FullStack",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
      labName:"UFCG",
  },
  {
      projectName: "Me Escolhe",
      job: "Back-End",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
      labName:"UFCG",
  },
  {
      projectName: "Me Escolhe",
      job: "Front-End",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
      labName:"UFCG",
  },
  {
      projectName: "Me Escolhe",
      job: "Tester",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
      labName:"UFCG",
  },
]

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/user/selections">
        <SelectionsPage title={ "Minhas Seleções" } selections={ selections }/>
      </Route>
      <Route path="/user/profile">
        <CandidateProfile />
      </Route>
      <Route path="/user/projects/project/profile">
        <CandidateProjectProfile />
      </Route>
      <Route path="/project/profile">
        <ProjectProfile />
      </Route>
      <Route path="/">
        <SelectionsPage title={ "Seleções" } selections={ selections }/>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
