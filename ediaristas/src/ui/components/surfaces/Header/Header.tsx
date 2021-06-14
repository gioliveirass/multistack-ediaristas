// ESTRUTURA DO COMPONENTE Header
// ------------------------------

import React from "react"; // importando o react
import { HeaderAppBar, HeaderLogo } from "./Header.style"; // importando estilização
import { Toolbar, Container } from "@material-ui/core";

// criando o componente com a tipagem
const Header: React.FC = () => {
  // O sticky é semelhante ao position fixed, mas ele empurra os outros componentes para baixo
  // ao invés de ficar em cima deles
  return (
    <HeaderAppBar position={"sticky"}>
      {/* No material-ui, se coloca uma toolbar para fazer a header */}
      {/* Passa o componente container para limitar a largura do elemento */}
      <Toolbar component={Container}>
        <HeaderLogo src={"/img/logos/logo.svg"} alt={"e-diaristas"} />
      </Toolbar>
    </HeaderAppBar>
  );
};

// exportando o componente
export default Header;
