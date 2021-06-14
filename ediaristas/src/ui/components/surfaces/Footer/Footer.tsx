// ESTILIZAÇÃO DO COMPONENTE UserInformation
// -----------------------------------------

// importando o react
import React from "react";

// importando a estilização
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";

// importando typography
import { Typography, Box } from "@material-ui/core";

// criando o componente
const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos?</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            E-Diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos a melhor profissional com
            total segurança e praticidade! São milhares de clientes satisfeitos
            por todo o país.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src="/img/logos/app-store.png" alt="AppStore" />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src="/img/logos/google-play.png" alt="Google Play" />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

// exportando o componente
export default Footer;
