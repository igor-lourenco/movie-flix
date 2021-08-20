import { useForm } from "react-hook-form";
import { requestBackendReview } from "util/requests";
import "./styles.css";

type DadosForm = {
  text: string;
  movieId: string;
}

type Props = {
  movieId: string;
  onNewReview: Function;
}

const Cardavaliacao = ({ movieId, onNewReview } : Props) => {
    
const { register, handleSubmit, formState: {errors}, setValue } = useForm<DadosForm>();

const onSubmit = (dadosForm: DadosForm) => {
    dadosForm.movieId=movieId;
    requestBackendReview(dadosForm).then(() => {
      setValue("text", ""); //Limpa input
      onNewReview(); //Aciona o evento de atualização da lista
    });    
};

  return (
    <div className="avaliacao-card">
      <form onSubmit={handleSubmit(onSubmit)} className="input-container">
          <input
            {...register("text",{
              required: "Campo obrigatório!"
            })}
            type="text"
            className="mb-3 form-control avaliacao-input"
            placeholder="Deixe sua avaliação aqui"
            name="text"
          />
          <div className="invalid-feedback d-block">{errors.text?.message}</div>
        <div className="avaliacao-submit">
            <button type="submit" className="btn btn-warning avaliacao-custom-btn">SALVAR AVALIAÇÃO</button>
        </div>
      </form>
    </div>
  );
};
export default Cardavaliacao;