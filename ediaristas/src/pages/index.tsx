// importando os componentes criados
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
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

      {/* INSERINDO COMPONENTE UserInformation */}
      <UserInformation
        name={"Giovana"}
        picture={"https://github.com/gioliveirass.png"}
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
}
