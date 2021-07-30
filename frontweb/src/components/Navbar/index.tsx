import "./styles.css";
import { NavLink, useHistory } from "react-router-dom";
import { estaAutenticado, obtemDadosToken, removeDadosAutenticacao } from "util/requests";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { ContextoAutenticacao } from "../../ContextoAutenticacao";

const Navbar = () => {

  const { dadosAutContexto, setDadosAutContexto } = useContext(ContextoAutenticacao);

  useEffect(() => {
    if (estaAutenticado()) {
      setDadosAutContexto({
        autenticado: true,
        dadosToken: obtemDadosToken(),
      });
    } else {
      setDadosAutContexto({
        autenticado: false,
      });
    }
  }, [setDadosAutContexto]);

  const { handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = () => {
    removeDadosAutenticacao();
    setDadosAutContexto({
      autenticado: false,
    });
    history.replace("/");    
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-expand-lg navbar-light">
        <div
          className="custom-navbar"
          id="navbarSupportedContent">
          <NavLink to="/" className="navbar-brand">
            MovieFlix
          </NavLink>
          {dadosAutContexto.autenticado && (
            <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit(onSubmit)}>
              <button
                className="btn btn-outline-dark btn-sm my-2 my-sm-0"                
              >
                SAIR
              </button>
            </form>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;