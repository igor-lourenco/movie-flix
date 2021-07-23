import MovieReview from "pages/MovieReviews";
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
            <Route path="/movies/:moviesId" exact >
                <MovieReview />
            </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default Routes;