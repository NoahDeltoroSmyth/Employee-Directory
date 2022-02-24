import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header';
import Auth from './views/Auth/Auth';
import LandingPage from './views/LandingPage/LandingPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
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
