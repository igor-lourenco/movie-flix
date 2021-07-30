import { useState } from "react";
import "./App.css";
import { ContextoAutenticacao, DadosAutContexto } from "./ContextoAutenticacao";
import Routes from "./Routes";

function App() {
  const [dadosAutContexto, setDadosAutContexto] = useState<DadosAutContexto>({
    autenticado: false,
  });

  return (
    <ContextoAutenticacao.Provider
      value={{ dadosAutContexto, setDadosAutContexto }}
    >
      <Routes />
    </ContextoAutenticacao.Provider>
  );
}

export default App;