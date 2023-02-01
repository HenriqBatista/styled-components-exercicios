import React from "react";
import CardVideo from "./Componentes/CardVideos";
import { GlobalStyle } from "./GlobalStyle";
import { AppContainer, AppFooter, AppHeader, AppMain, AppNav, AppPainel } from "./Componentes/Style";


export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      {/* <GlobalStyle/> */}
      <AppContainer>
        <AppHeader>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </AppHeader>

        <AppMain>
          <AppNav>
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </AppNav>

          <AppPainel>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </AppPainel>
        </AppMain>

        <AppFooter>
          <h4>Oi! Eu moro no footer!</h4>
        </AppFooter>
      </AppContainer>
    </div>
  );
}
