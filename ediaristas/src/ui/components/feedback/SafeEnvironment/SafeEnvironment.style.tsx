// ESTILIZAÇÃO DO COMPONENTE SafeEnvironment
// -----------------------------------------

// importando a função que fará a extilização
import { experimentalStyled as styled } from "@material-ui/core/styles";

// criando uma constante que recebe a estilização (SafeEnvironmentContainer)
export const SafeEnvironmentContainer = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0; /* 16px 0 */
  font-size: 12px;
`;
