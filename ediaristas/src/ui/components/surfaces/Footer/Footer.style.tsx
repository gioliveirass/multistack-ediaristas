// ESTILIZAÇÃO DO COMPONENTE UserInformation
// -----------------------------------------

// importando a função que fará a extilização
import { experimentalStyled as styled } from "@material-ui/core";
// importando o container
import { Container, Typography } from "@material-ui/core";

// ========================
// criando componente geral
// ========================

export const FooterStyled = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  margin-top: auto; // se não tiver conteúdo o suficiente, a margin ocupa toda a tela e joga o rodapé para baixo
`;

// =============================
// colocando container do footer
// =============================

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

// ===============================
// estilização do título do footer
// ===============================

export const FooterTitle = styled((props) => (
  // Estilizando a tipografia do footer de acordo com o tema definido e passando as propriedades
  <Typography component={"h2"} variant={"body2"} {...props} />
))`
  font-weight: bold;
`;

// ===================================
// estilização da lista de aplicativos
// ===================================

export const AppList = styled("ul")`
  display: flex;
  list-style-type: none; // Remove os pontinhos da lista
  padding: 0;
  gap: ${({ theme }) => theme.spacing()};

  img {
    width: 122px;
  }
`;
