import * as S from "./Styles";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { createProperty } from "../../services/CreateProperty/createProperty";
import { AddImoveisProps } from "./types";
import BoxInputs from "./BoxInputs/BoxInputs";
import BoxArea from "./BoxArea/BoxArea";
import BoxCep from "./BoxCep/BoxCep";
import BoxSpecs from "./BoxSpecs/BoxSpecs";
import BoxComodidades from "./BoxComodidades/BoxComodidades";
import BoxPayment from "./BoxPayment/BoxPayment";
import BoxOwner from "./BoxOwner/BoxOwner";
import BoxFiles from "./BoxFiles/BoxFiles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Schema/Schema";
import { UseAuth } from "../../context/LoginContext/ContexLogin";
import Button from "../../components/Button/Button";

const ToAddImoveis = () => {
  const [file, setFile] = useState<File[]>([]);
  const { user } = UseAuth();
  const { register, handleSubmit } = useForm<AddImoveisProps>({
    resolver: yupResolver(schema),
  });
  const [status, setStatus] = useState<boolean>(false);
  const navigate = useNavigate();

  async function onSubmit(dataValues: AddImoveisProps) {
    if (!file || !dataValues) return;
    if (file.length < 4) return alert("Selecione exatamente 4 imagems");

    setStatus(true);
    await createProperty(file, dataValues, user?.uid as string);
    setStatus(false);
    navigate("/my-property");
    toast.success(`Imóvel Adicionado Com Sucesso.`);
  }

  function changeFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      if (selectedFiles.length + file.length > 4) {
        return alert("Você pode selecionar no máximo 4 imagens.");
      }
      setFile((prevFiles) => [...prevFiles, ...selectedFiles]);
    }
  }

  useEffect(() => {
    window.scrollTo({ behavior: "auto", top: 0 });
  }, []);

  return (
    <S.Section>
      <S.Box>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Adicionar imóvel</h1>

          <BoxInputs register={register} />
          <BoxArea register={register} />
          <BoxCep register={register} />
          <BoxSpecs register={register} />
          <BoxComodidades register={register} />
          <BoxPayment register={register} />
          <BoxOwner register={register} />
          <BoxFiles changeFile={changeFile} />

          <Button text={"Adicionar Imóvel"} status={status} />
        </S.Form>
      </S.Box>
    </S.Section>
  );
};

export default ToAddImoveis;
