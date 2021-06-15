// ESTILIZAÇÃO DO COMPONENTE SafeEnvironment
// -----------------------------------------

// importando a função que fará a extilização
import { experimentalStyled as styled } from "@material-ui/core/styles";

// importando o componente do material-ui
import { TextField } from "@material-ui/core/";

// criando uma constante que recebe a estilização (SafeEnvironmentContainer)
export const TextFieldStyled = styled(TextField)`
  // editando a raiz do componente do framework
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
