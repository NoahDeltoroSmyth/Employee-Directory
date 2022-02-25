import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header';
import Auth from './views/Auth/Auth';
import LandingPage from './views/LandingPage/LandingPage';
import CreateProfile from './views/CreateProfile/CreateProfile';
import UserProfile from './views/UserProfile/UserProfile';
import { UserProvider } from './context/UserContext/UserContext';
import { ProfileProvider } from './context/ProfileContext/profileContext';

export default function App() {
  return (
    <>
      <UserProvider>
        <ProfileProvider>
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
              <Route path="/create-profile">
                <CreateProfile />
              </Route>
              <Route path="/profile">
                <UserProfile />
              </Route>
              {/* <Route path="/edit-profile">
            <EditProfile />
          </Route> */}
            </Switch>
          </BrowserRouter>
        </ProfileProvider>
      </UserProvider>
    </>
  );
}
