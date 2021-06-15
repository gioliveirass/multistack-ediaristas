// Hook da página index
// hooks permitem que trabalhemos com estados dentro de componentes funcionais
// ---------------------------------------------------------------------------

// importando o useState e useMemo usado para fazer o hook
import { useState, useMemo } from "react";
// importando interface (tipagem)
import { UserShortInterface } from "data/@types/userInterface";
// importando serviços de validação
import { ValidationService } from "data/services/ValidationService";
// importando configurações feitas para usar o axios
import { ApiService } from "data/services/ApiService";

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

  // função para fazer a busca de profissionais
  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro("");

    try {
      // só irá executar as próximas linhas quando tiver uma resposta dessa função
      const { data } = await ApiService.get<{
        // adicionando tipagem do que se espera do json
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));

      // adicionando os novos valores
      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
      setBuscaFeita(true);
      setCarregando(false);
    } catch (error) {
      setErro("CEP não encontrado");
      setCarregando(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  };
}
