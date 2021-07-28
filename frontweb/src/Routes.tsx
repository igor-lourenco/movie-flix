import PrivateRoute from "components/PrivateRoute";
import MovieReview from "pages/MovieReviews";
import { Router, Redirect, Route, Switch} from "react-router-dom";
import history from "util/history";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import Movie from "./pages/Movie";

const Routes = () => {
  return (
    <Router history={history}>
    <Navbar />
        <Switch>
            <Redirect to="/" from="/oauth/token" />
            <Route path="/" exact>
                <Auth />
            </Route>
            <PrivateRoute path="/movies">
                <Movie />
            </PrivateRoute>
            
            <PrivateRoute path="/movies/:moviesId" >
                <MovieReview />
            </PrivateRoute>
        </Switch>
    </Router>
  );
};

export default Routes;