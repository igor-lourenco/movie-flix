import { ReactComponent as Image } from "assets/images/Desenho.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { requestBackendLogin } from "util/requests";
import "./styles.css";

type FormData = {
  username: string;
  password: string;
}

const Auth = () => {

  const [hasError, setHasError] = useState(false); //se os dados de login estiver errado 
  const { register, handleSubmit, formState : {errors}} = useForm<FormData>(); //login

  const onSubmit= (formData : FormData) => {
    requestBackendLogin(formData) //passa os dados do login para o backend
    .then(response => { //se der certo a requisição no backend
      setHasError(false)
      console.log('SUCESSOOOOOOOOOOOOOOO',  response);
    }).catch(Error => { //se der algum
      setHasError(true)
      console.log('Erro', Error);
    });
    
  }

  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <Image />
      </div>
      <div className="auth-form-container">
        <div className="login-card">
          <h1>LOGIN</h1>
            {hasError && // só vai aparecer se der erro de login
          <div className="danger alert-danger">
             Erro ao tentar efetuar o login
             </div>
            }
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4 mb-4">
              <input
              {...register("username", {
                required: "Campo Obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "E-mail inválido"
                }
              })}
                type="text"
                className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
                placeholder="Email"
                name="username"
              />
              <div className="invalid-feedback d-block">{errors.username?.message}</div>
            </div>
            <div className="">
              <input
               {...register("password" , {
                 required: "Campo obrigatório"
               })}
                type="password"
                className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Password"
                name="password"
              />
              <div className="invalid-feedback d-block">{errors.password?.message}</div>
            </div>
            <Link to="/admin/auth/recover" className="login-link-recover">
              Esqueci a senha
            </Link>
            <div className="login-submit">
              <button type="submit" className="btn btn-primary btn-lg">
                <h5>Fazer login</h5>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
