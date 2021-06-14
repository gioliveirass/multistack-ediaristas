// ESTILIZAÇÃO DO COMPONENTE Header
// --------------------------------

// importando a função que fará a extilização
import { experimentalStyled as styled } from "@material-ui/core";
// importando um componente do framework
import { AppBar } from "@material-ui/core";

// =============================================================
// criando uma constante que recebe a estilização (HeaderAppBar)
// =============================================================

// passa um componente pronto no styled(), o que nos permite customizar um componente já existente
export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

  // adicionando responsividade com o framework material-ui
  // se o display for maior que o tamanho md...
  ${({ theme }) => theme.breakpoints.up("md")} {
    // Ajustando a configuração padrão da Toolbar do framework Material-ui
    .MuiToolbar-root {
      height: 100px;
    }
  }

  // se o display for menor que o tamanho md...
  ${({ theme }) => theme.breakpoints.down("md")} {
    // Ajustando a configuração padrão da Toolbar do framework Material-ui
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

// =================================
// estilização do elemento de imagem
// =================================

export const HeaderLogo = styled("img")`
  height: 25px;

  // se o display for maior que o tamanho md...
  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 47px;
  }
`;
