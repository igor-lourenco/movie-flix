import MovieReview from "pages/MovieReviews";
import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import Movie from "./pages/Movie";

const Routes = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Routes;