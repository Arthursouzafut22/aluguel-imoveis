import Input from "../../../components/Input/Input";
import * as S from "./Styles";
import { FaPaperPlane } from "react-icons/fa";

const FormProprietary = () => {
  return (
    <S.Form onSubmit={(e) => e.preventDefault()}>
      <Input
        type="text"
        id="Nome:"
        name="Nome:"
        label="Nome:"
        placeholder="Digite seu nome"
      />{" "}
      <Input
        type="email"
        id="Email:"
        name="Email:"
        label="Email:"
        placeholder="Digite seu email"
      />{" "}
      <Input
        type="number"
        id="Telefone:"
        name="Telefone:"
        label="Telefone:"
        placeholder="Digite seu Telefone"
      />
      <div>
        <label htmlFor="Mensagem:">Mensagem:</label>
        <textarea
          rows={6}
          name="Mensagem:"
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
