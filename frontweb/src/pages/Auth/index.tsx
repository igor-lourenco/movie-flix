import {ReactComponent as Image } from 'assets/images/Desenho.svg';
import {Switch, Route} from 'react-router-dom';
import "./styles.css";

const Auth = () => {
  return (
   <div className="auth-container">
       <div className="auth-banner-container">
           <h1>Avalie Filmes</h1>
           <p>Diga o que você achou do seu filme favorito</p>
           <Image />
       </div>
       <div className="auth-form-container">
           <Switch>
               <Route path="/auth/login" exact>
                   <h1>Card Login</h1>
               </Route>
               <Route path="/auth/signup" >
                   <h1>Card Signup</h1>
               </Route>
               <Route path="/auth/recover">
                   <h1>Card Recover</h1>
               </Route>
           </Switch>
       </div>
   </div>
  );
};

export default Auth;