// ESTILIZAÇÃO DO COMPONENTE UserInformation
// -----------------------------------------

// importando a função que fará a extilização
import { experimentalStyled as styled } from "@material-ui/core";

// importando outros componentes necessários
import { Avatar, Rating } from "@material-ui/core";

// ======================================================================
// criando uma constante que recebe a estilização geral (UserInformation)
// ======================================================================

export const UserInformationContainer = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar description";
  background-color: ${({ theme }) => theme.palette.grey[50]};
  padding: ${({ theme }) => theme.spacing(3)};
  align-items: center;
  gap: ${({ theme }) => theme.spacing(.5) + ' ' + theme.spacing(2)};
`;

// ==========================================================
// criando uma constante que recebe a estilização do UserName
// ==========================================================

export const UserName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

// =================================================================
// criando uma constante que recebe a estilização do UserDescription
// =================================================================

export const UserDescription = styled("div")`
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

// ==============================================================
// criando uma constante que recebe a estilização do AvatarStyled
// ==============================================================

export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;

// ==============================================================
// criando uma constante que recebe a estilização do RatingStyled
// ==============================================================

export const RatingStyled = styled(Rating)`
  grid-area: rating;
  font-size: 14px;
`;
