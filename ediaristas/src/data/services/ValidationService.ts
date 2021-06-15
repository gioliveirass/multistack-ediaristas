// Serviços de validação

/* Serviço = função ou objeto de funções que vão judar nosso código
   e que podem ser acessadas de qualquer lugar do sistema */

export const ValidationService = {
  // validando se o cep está correto
  cep(cep = ""): boolean {
    // D = procura qualquer coisa que não seja um número
    // d = procura qualquer coisa que seja um número
    // g = pesquisa na string inteira
    return cep.replace(/\D/g, "").length === 8;
  },
};
