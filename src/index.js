import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import { Menu } from './components/templates'
import { route } from './routes'
import * as serviceWorker from './serviceWorker'
import { Home, AllSelections, CandidateSelections, CandidateProfile, CandidateProjectProfile, SelectionProfile } from './pages';

import auth from './auth'

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

const ProtectedRoute = ({component, ...props}) => {
  return <Route
    {...props}
    render={(rest) => {
      if(auth.isAuthenticated())
        return <>      
          <Menu user={ user }/>
          { component }
        </>
      else 
        return <Redirect to={ route.home }/>
    }}
  />
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route 
        exact 
        path={ route.home }
        render={() => <Home/>}/>
      
      <ProtectedRoute 
        exact 
        path={ route.selections }
        component={<AllSelections/>}
      />

      
      <ProtectedRoute 
        exact 
        path={ route.userProfile }
        component={<CandidateProfile/>}
      />  
      <ProtectedRoute 
        exact 
        path={ route.userSelection }
        component={<CandidateProjectProfile/>}
      />

      <ProtectedRoute 
        exact 
        path={ route.selectionProfile + '/:selectionID' }
        component={<SelectionProfile/>}       
      />

      <ProtectedRoute 
        exact 
        path={ route.userSelections }
        component={<CandidateSelections title={ "Minhas Seleções" } selections={ selections }/>}
      />

      <Route 
        exact 
        path="*"
        component={() => "404 NOT FOUND"}
      />
        
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
