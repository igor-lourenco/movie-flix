import { useState } from "react";
import "./App.css";
import { ContextoAutenticacao, DadosAutContexto } from "./ContextoAutenticacao";
import Routes from "./Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [dadosAutContexto, setDadosAutContexto] = useState<DadosAutContexto>({
    autenticado: false,
  });

  return (
    <ContextoAutenticacao.Provider
      value={{ dadosAutContexto, setDadosAutContexto }}
    >
      <Routes />
      <ToastContainer />
    </ContextoAutenticacao.Provider>
  );
}

export default App;