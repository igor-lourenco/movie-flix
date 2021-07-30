import "./styles.css";
import { ReactComponent as ImgEstrela } from "assets/images/Estrela.svg"; //Obrigatorio que o nome comece com letra maiúscula
import { Avaliacao } from "assets/types/Avaliacao";


type Props = {
  avaliacao: Avaliacao;
}

const Avaliacoes = ({ avaliacao } : Props) => {
  return (
    <>
      <div className="avaliador-container">
        <ImgEstrela />
        <p>{avaliacao.user.name}</p>
      </div>
      <div className="card-avaliador-container">
        <div className="card base-card card-avaliacao">
          <p>{avaliacao.text}</p>
        </div>
      </div>
    </>
  );
};
export default Avaliacoes;