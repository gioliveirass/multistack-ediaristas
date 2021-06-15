// importando os componentes criados
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";

import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.style";

// importando componentes do material-ui
import { Button, Typography, Container } from "@material-ui/core";

// importando hooks
import useIndex from "data/hooks/pages/UseIndex.page";

export default function Home() {
  // recebendo valores dos hooks
  const { cep, setCep, cepValido } = useIndex();

  return (
    <div>
      {/* INSERINDO COMPONENTE SafeEnvironment */}
      <SafeEnvironment />

      {/* INSERINDO COMPONENTE PageTitle */}
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja os profissionais da sua localidade"
        }
      />

      {/* INSERINDO COMPONENTE Container */}
      <Container>
        {/* INSERINDO COMPONENTE FormElementsContainer */}
        <FormElementsContainer>
          {/* INSERINDO COMPONENTE TextField */}
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {/* INSERINDO COMPONENTE Typography */}
          <Typography color={"error"}>CEP Inválido</Typography>

          {/* INSERINDO COMPONENTE Button */}
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        {/* INSERINDO COMPONENTE ProfissionaisPaper */}
        <ProfissionaisPaper>
          {/* INSERINDO COMPONENTE ProfissionaisContainer */}
          <ProfissionaisContainer>
            {/* INSERINDO COMPONENTE UserInformation */}
            <UserInformation
              name={"Giovana"}
              picture={"https://github.com/gioliveirass.png"}
              rating={3}
              description={"São Paulo"}
            />

            <UserInformation
              name={"Giovana"}
              picture={"https://github.com/gioliveirass.png"}
              rating={3}
              description={"São Paulo"}
            />

            <UserInformation
              name={"Giovana"}
              picture={"https://github.com/gioliveirass.png"}
              rating={3}
              description={"São Paulo"}
            />

            <UserInformation
              name={"Giovana"}
              picture={"https://github.com/gioliveirass.png"}
              rating={3}
              description={"São Paulo"}
            />

            <UserInformation
              name={"Giovana"}
              picture={"https://github.com/gioliveirass.png"}
              rating={3}
              description={"São Paulo"}
            />

            <UserInformation
              name={"Giovana"}
              picture={"https://github.com/gioliveirass.png"}
              rating={3}
              description={"São Paulo"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
