import Input from "../../../components/Input/Input";
import * as S from "./Styles";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Schema/Schema";
import { FormProps } from "./types";
import createInterest from "../../../services/CreateInterest/createInterest";

const FormProprietary = ({ id }: { id: string }) => {
  const { register, handleSubmit } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const onSumit = async (data: FormProps) => {
    const newData = { imovel_id: id as string, ...data };
    await createInterest(newData);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSumit)}>
      <Input
        {...register("nome", { required: true })}
        type="text"
        id="Nome:"
        label="Nome:"
        placeholder="Digite seu nome"
      />{" "}
      <Input
        {...register("email", { required: true })}
        type="email"
        id="Email:"
        label="Email:"
        placeholder="Digite seu email"
      />{" "}
      <Input
        {...register("celular", { required: true })}
        type="number"
        id="Telefone:"
        label="Telefone:"
        placeholder="Digite seu Telefone"
      />
      <div>
        <label htmlFor="Mensagem:">Mensagem:</label>
        <textarea
          {...register("mensagem", { required: true })}
          rows={6}
          id="Mensagem:"
          placeholder="Digite sua mensagem"
        ></textarea>
      </div>
      <button>
        <FaPaperPlane />
        Enviar Mensagem
      </button>
    </S.Form>
  );
};

export default FormProprietary;
