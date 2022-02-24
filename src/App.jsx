import { Route, Switch, BrowserRouter } from 'react-router-dom';

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
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/create-profile">
            <CreateProfile />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/edit-profile">
            <EditProfile />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
