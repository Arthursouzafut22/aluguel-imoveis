import BoxArea from "../../ToAddImoveis/BoxArea/BoxArea";
import BoxCep from "../../ToAddImoveis/BoxCep/BoxCep";
import BoxComodidades from "../../ToAddImoveis/BoxComodidades/BoxComodidades";
import BoxInputs from "../../ToAddImoveis/BoxInputs/BoxInputs";
import BoxOwner from "../../ToAddImoveis/BoxOwner/BoxOwner";
import BoxPayment from "../../ToAddImoveis/BoxPayment/BoxPayment";
import BoxSpecs from "../../ToAddImoveis/BoxSpecs/BoxSpecs";
import { AddImoveisProps } from "../../ToAddImoveis/types";
import * as S from "../../ToAddImoveis/Styles";
import { useForm } from "react-hook-form";
import { editProperty } from "../../../services/EditProperty/editProperty";
import { useQueryProperty } from "../../../services/PropertyService/propertyService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PropertProps } from "../../../services/Types";
import { UseAuth } from "../../../context/LoginContext/ContexLogin";
import Button from "../../../components/Button/Button";

const FormEdit = ({ id }: { id: string | undefined }) => {
  const { register, handleSubmit, setValue } = useForm<AddImoveisProps>({});
  const { user } = UseAuth();
  const { data } = useQueryProperty<PropertProps[]>(
    `/my-property/${user?.uid as string}`
  );
  const [dados, setDados] = useState(data);
  const searchId = dados?.find((item) => item.id === Number(id));
  const navigate = useNavigate();
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    setDados(data);
    window.scrollTo({ behavior: "auto", top: 0 });
    if (searchId) {
      setValue("tipo", searchId?.tipo || "");
      setValue("nome", searchId.nome || "");
      setValue("descrição", searchId.descricao || "");
      setValue("banheiros", String(searchId.banheiros) || "");
      setValue("quartos", String(searchId.camas) || "");
      setValue("m²", String(searchId.metros_quadrados) || "");
      setValue("comodidades", searchId.comodidades || "");
      setValue("semanal", String(parseInt(searchId.semanal)) || "");
      setValue("mensal", String(searchId.mes) || "");
      setValue("diaria", String(parseInt(searchId.diaria)) || "");
      setValue("rua", searchId?.rua || "");
      setValue("numero", searchId?.numero || "");
      setValue("bairro", searchId?.bairro || "");
      setValue("estados", searchId?.estado || "");
      setValue("cidade", searchId?.cidade || "");
      setValue("cep", searchId?.cep || "");
      setValue("proprietário", searchId["nome_proprietario"] || "");
      setValue("email", searchId?.email || "");
      setValue("celular", searchId["celular_proprietario"] || "");
    }
  }, [data, searchId, setValue]);

  async function onSubmit(dataValues: AddImoveisProps) {
    setStatus(true);
    await editProperty(id, dataValues);
    setStatus(false);
    navigate("/my-property");
    toast.success(`Imóvel Atualizado Com Sucesso.`);
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Editar imóvel</h1>

      <BoxInputs register={register} />
      <BoxArea register={register} />
      <BoxCep register={register} />
      <BoxSpecs register={register} />
      <BoxComodidades register={register} />
      <BoxPayment register={register} />
      <BoxOwner register={register} />

      <Button text={"Atualizar Imóvel"} status={status} />
    </S.Form>
  );
};

export default FormEdit;
