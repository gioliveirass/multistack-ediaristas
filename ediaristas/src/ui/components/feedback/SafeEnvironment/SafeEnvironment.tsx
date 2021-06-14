// ESTRUTURA DO COMPONENTE SafeEnvironment
// ---------------------------------------

import React from 'react'; // importando o react
import { SafeEnvironmentContainer } from './SafeEnvironment.style'; // importando a estilização
import { Container } from '@material-ui/core'; // importando o componente container do framework material-ui

// criando o componente
const SafeEnvironment = () => {
    return (
        <SafeEnvironmentContainer>
            <Container> {/* Componente do framework, define um valor de largura fixo */}
                Ambiente 100% Seguro <i className={'twf-lock'} />
            </Container>
        </SafeEnvironmentContainer>
    );
}

// exportando o componente
export default SafeEnvironment;