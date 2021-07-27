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
            <Route path="/movies" exact >
                <Movie />
            </Route>
            
            <Route path="/movies/:moviesId" >
                <MovieReview />
            </Route>
        </Switch>
    </Router>
  );
};

export default Routes;