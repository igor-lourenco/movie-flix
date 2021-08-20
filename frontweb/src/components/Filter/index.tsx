import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { Genre } from "assets/types/Genre";
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";
import { requestBackend } from "util/requests";

export type MovieFilterData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const Filter = ({ onSubmitFilter }: Props) => {
  const [selectGenre, setSelectGenre] = useState<Genre[]>([]);


  const {
    handleSubmit,
    getValues,
    setValue,
    control,
  } = useForm<MovieFilterData>();

  const onSubmit = (formData: MovieFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    //função pra enviar o formulário toda vez que mudar o valor do campo das categorias
    setValue("genre", value);

    const obj: MovieFilterData = { // const obj do tipo ProductFilterFata
      genre: getValues("genre"), // pega o valor que tá no campo da categoria
    };
    onSubmitFilter(obj);
  };

 
  useEffect(() => {
    //função pra carrega do backend quando o componente for montado
    requestBackend({ url: '/genres', withCredentials: true }).then((response) => {
        console.log('Dados: ', response)
      setSelectGenre(response.data); //Atribui o dados da resposta do backend no setSelectCategories
    });
  }, []);
 
  return (
    <div className="base-card movie-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="movie-filter-form">
        <div className=" form-control movie-filter-category-container">
          <Controller
            name="genre"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectGenre}
                placeholder='Gênero'
                isClearable
                classNamePrefix="movie-filter-crud-select"
              onChange={value => handleChangeGenre(value as Genre)}
                getOptionLabel={(genre: Genre) => genre.name}
                getOptionValue={(genre: Genre) => String(genre.id)}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};
export default Filter;
