import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import LandingPage from './views/LandingPage/LandingPage';

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/sign-in">
            <Auth />
          </Route>
          <Route path="/sign-up">
            <Auth signingUp />
          </Route>
          {/* <Route path="/create-profile">
            <CreateProfile />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/edit-profile">
            <EditProfile />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}
