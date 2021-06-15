// Hook da página index
// hooks permitem que trabalhemos com estados dentro de componentes funcionais
// ---------------------------------------------------------------------------

// importando o useState e useMemo usado para fazer o hook
import { useState, useMemo } from "react";

// importando interface (tipagem)
import { UserShortInterface } from "data/@types/userInterface";

// importando serviços de validação
import { ValidationService } from "data/services/ValidationService";

// criando a função que é o nosso hook
export default function useIndex() {
  // O useState retorna dois valores, que são: [valorAtual, valorDesejadoNaModificação]
  const [cep, setCep] = useState(""),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]), // Só executa a função se a variável cep for alterada
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);

  return { cep, setCep, cepValido };
}
