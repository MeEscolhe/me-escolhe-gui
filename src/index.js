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
import { Home, AllSelections, CandidateProfile, CandidateProjectProfile, SelectionProfile } from './pages';

import auth from './auth'


const ProtectedRoute = ({component,...props}) => {
  return <Route
    {...props}
    render={() => {
      if(auth.isAuthenticated())
        return <>      
          <Menu />
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
        component={<AllSelections title="Seleções"/>}
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
        component={<AllSelections title="Minhas Seleções"/>}
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
