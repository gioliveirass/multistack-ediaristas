// ESTRUTURA DO COMPONENTE PageTitle
// ---------------------------------

// importando react
import React from "react";

// importando estilização
import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from "./PageTitle.style";

// criando a tipagem com o typescript
interface PageTitleProps {
  title: string;

  // subtitle não é obrigatório (tem a ? na frente), ao contrário do title
  // e pode ser do tipo string OU um elemento html
  subtitle?: string | JSX.Element;
}

// criando o PageTitle com a tipagem de componente funcional do React
const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      {/* acessando propriedades passadas no index */}
      <PageTitleStyled>{props.title}</PageTitleStyled>
      <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};

// exportando o componente
export default PageTitle;
