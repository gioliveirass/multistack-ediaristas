// ESTILIZAÇÃO DO COMPONENTE PageTitle
// -----------------------------------

// importando a função que fará a extilização
import { experimentalStyled as styled } from "@material-ui/core/styles";

// ===============================================================
// criando constante com a estilização padrão (PageTitleContainer)
// ===============================================================

export const PageTitleContainer = styled("div")`
  text-align: center;

  // essa margin é aplicada com material-ui, é o mesmo que digitar '40px 0'
  margin: ${({ theme }) => theme.spacing(5) + " " + 0};
`;

// =============================================
// constante com a estilização do título somente
// =============================================

export const PageTitleStyled = styled("h2")`
  margin: 0;
  font-weight: 600;

  // colocando a valores de acordo com o tema
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};

  // aplicando responsividade com o material-ui
  // se o display for menor que o tamanho 'md', o font-size será menor (tamanho body1)
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  } ;
`;

// ================================================
// constante com a estilização do subtitulo somente
// ================================================

export const PageSubtitleStyled = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5) + " " + 0}; // 12px 0
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;

  // aplicando responsividade com o material-ui
  // se o display for menor que o tamanho 'md', o font-size será menor (tamanho body2)
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  } ;
`;
