import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import Movie from "./pages/Movie";

const Routes = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Switch>
        
            <Route path="/" exact>
                <Auth />
            </Route>
            <Route path="/movies" exact >
                <Movie />
            </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default Routes;