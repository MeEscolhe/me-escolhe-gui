import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom"
import { Menu } from './components/templates'
import { route } from './routes'
import { Home, 
  AllSelections, 
  Candidates,
  CreateCandidateAccount, 
  CreateRecruiterAccount, 
  CandidateProfile, 
  CandidateProjectProfile, 
  SelectionProfile } from './pages';

import auth from './auth'

const ProtectedRoute = ({component,...props}) => {
  return <Route
    {...props}
    render={() => {
      if(auth.isAuthenticated())
        return <>      
          <Menu/>
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
      
      <Route 
        exact 
        path={ route.accountStudent }
        render={() => <CreateCandidateAccount/>}/>

      <Route 
        exact 
        path={ route.accountRecruiter }
        render={() => <CreateRecruiterAccount/>}/>
      
      <ProtectedRoute 
        exact 
        path={ route.selections }
        component={<AllSelections title="Seleções" location={() => useLocation() } history={useHistory}/>}
      />
      <ProtectedRoute 
        exact 
        path={ route.candidates }
        component={<Candidates />}
      />  
      <ProtectedRoute 
        exact 
        path={ route.authProfile }
        component={<CandidateProfile />}
      />  
      <ProtectedRoute 
        exact 
        path={ route.authSelection }
        component={<CandidateProjectProfile/>}
      />

      <ProtectedRoute 
        exact 
        path={ route.selectionProfile + '/:selectionID' }
        component={<SelectionProfile/>}       
      />

      <ProtectedRoute 
        exact 
        path={ route.authSelections }
        component={<AllSelections title="Minhas Seleções" location={useLocation} history={useHistory}/>}
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

