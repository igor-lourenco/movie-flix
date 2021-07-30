import { Redirect, Route } from "react-router-dom";
import { estaAutenticado } from "util/requests";

type Props = {
  children: React.ReactNode;
  path: string;
};
const RotaPrivada = ({ children, path }: Props) => {
  return (
    <Route
      path={path}
      render={() =>
        estaAutenticado() ? children : <Redirect to="/" />
      }
    />
  );
};
export default RotaPrivada;