// ESTILIZAÇÃO DO COMPONENTE SafeEnvironment
// -----------------------------------------

// importando a função que fará a extilização
import { experimentalStyled as styled } from "@material-ui/core/styles";

// importando o que permitirá colocar a máscara no input
import InputMask from "react-input-mask";

// importando o componente TextField criado
import TextField from "ui/components/inputs/TextField/TextField";

// importando função que permitirá extender as propriedades
import { OutlinedTextFieldProps } from "@material-ui/core";

// criando tipagem
export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

// criando componente TextFieldMask
const TextFieldMask: React.FC<TextFieldMaskProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

// expportando componente
export default TextFieldMask;
