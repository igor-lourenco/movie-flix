import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";

const Routes = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Switch>
            <Redirect from="/" to="/auth/login" exact/>
            <Route path="/">
                <Auth />
            </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default Routes;