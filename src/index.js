/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
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
import { Loading } from './components/molecules'
import { route } from './routes'
import {
  Home,
  AllSelections,
  Candidates,
  CreateCandidateAccount,
  CreateRecruiterAccount,
  CandidateProfile,
  CandidateProjectProfile,
  SelectionProfile
} from './pages';

import auth from './auth'


const ProtectedRoute = ({ component, ...props }) => {
  return <Route
    {...props}

    render={() => {
      if (auth.isAuthenticated())
        return <>
          <Menu />
          { component}
        </>
      else
        return <Redirect to={route.home} />
    }}
  />
}
const App = () => {
  const [loading, setLoading] = useState(false);

  return <Router>
    {loading && <Loading />}
    <Switch>
      <Route
        exact
        path={route.home}
        render={() => <Home setLoading={() => { setLoading(!loading) }} />} />

      <Route
        exact
        path={route.accountStudent}
        render={() => <CreateCandidateAccount setLoading={() => { setLoading(!loading) }} />} />

      <Route
        exact
        path={route.accountRecruiter}
        render={() => <CreateRecruiterAccount setLoading={() => { setLoading(!loading) }} />} />

      <ProtectedRoute
        exact
        path={route.selections}
        component={<AllSelections title="Seleções" location={() => useLocation()} history={useHistory} setLoading={() => { setLoading(!loading) }} />}
      />
      <ProtectedRoute
        exact
        path={route.candidates}
        component={<Candidates />}
      />
      <ProtectedRoute
        exact
        path={route.authProfile}
        component={<CandidateProfile />}
      />
      <ProtectedRoute
        exact
        path={route.authSelection}
        component={<CandidateProjectProfile />}
      />

      <ProtectedRoute
        exact
        path={route.selectionProfile + '/:selectionID'}
        component={<SelectionProfile setLoading={() => { setLoading(!loading) }} />}
      />

      <ProtectedRoute
        exact
        path={route.authSelections}
        component={<AllSelections title="Minhas Seleções" location={useLocation} history={useHistory} />}
      />

      <Route
        exact
        path="*"
        component={() => "404 NOT FOUND"}
      />

    </Switch>
  </Router>;
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

