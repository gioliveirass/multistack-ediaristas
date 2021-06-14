// tudo que precisa estar presente em todas as telas fica aqui

import "@styles/globals.css"; // importando estilização global
import Head from "next/head"; // permite editar o head, a cabeça do html
import Header from "ui/components/surfaces/Header/Header" // importando o componente criado Header

// importações para adicionar o tema
// o ThemeProvider passa a propriedade do tema para todos os elementos que estiverem dentro dele
import { ThemeProvider } from "@material-ui/core";
import theme from "ui/themes/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>E-diarista</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link href="/fonts/tw-icons/css/treinaweb-icons.css" rel="stylesheet" />  
      </Head>

      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
