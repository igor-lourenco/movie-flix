import { createContext } from "react";
import { DadosToken } from "util/requests";

export type DadosAutContexto = {
    autenticado: boolean;
    dadosToken?: DadosToken;
}

export type AuthContextType = {
    dadosAutContexto: DadosAutContexto;
    setDadosAutContexto: (dadosAutContexto: DadosAutContexto) => void;
  };
  
export const ContextoAutenticacao = createContext<AuthContextType>({
dadosAutContexto: {
    autenticado: false,
},
setDadosAutContexto: () => null,
});