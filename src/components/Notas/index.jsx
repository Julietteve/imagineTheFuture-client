import React from "react";
import styled from "styled-components";

function Nota({ titulo, contenido }) {
  const renderTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      <Container>
        <Titulo>{titulo}</Titulo>

        {contenido.map((bloque, i) => {
          switch (bloque.tipo) {
            case "titulo":
              return (
                <Titulo key={i}>{renderTextWithLineBreaks(bloque.text)}</Titulo>
              );
            case "subtitulo":
              return (
                <Subtitulo key={i}>
                  {renderTextWithLineBreaks(bloque.text)}
                </Subtitulo>
              );
            case "parrafo":
              return (
                <Parrafo key={i}>
                  {renderTextWithLineBreaks(bloque.text)}
                </Parrafo>
              );
            case "parrafoBloque":
              return (
                <ParrafoBloque key={i}>
                  {renderTextWithLineBreaks(bloque.text)}
                </ParrafoBloque>
              );
            case "giro":
              return (
                <ParrafoGiro key={i}>
                  {renderTextWithLineBreaks(bloque.text)}
                </ParrafoGiro>
              );

            case "reflexivo":
              return (
                <ParrafoReflexivo key={i}>
                  {renderTextWithLineBreaks(bloque.text)}
                </ParrafoReflexivo>
              );
            case "insight":
              return (
                <Insight key={i}>
                  {renderTextWithLineBreaks(bloque.text)}
                </Insight>
              );
            case "cierreBold":
              return (
                <CierreBold key={i}>
                  {renderTextWithLineBreaks(bloque.text)}
                </CierreBold>
              );
            case "cierreRegular":
              return (
                <CierreRegular key={i}>
                  {renderTextWithLineBreaks(bloque.text)}
                </CierreRegular>
              );
            case "saeta":
              return (
                <Saeta key={i}>{renderTextWithLineBreaks(bloque.text)}</Saeta>
              );

            case "mixed":
              return (
                <Parrafo key={i}>
                  {bloque.content.map((parte, j) => {
                    if (parte.tipo === "saeta") {
                      return <Saeta key={j}>{parte.text}</Saeta>;
                    } else {
                      return <span key={j}>{parte.text}</span>;
                    }
                  })}
                </Parrafo>
              );

            default:
              return null;
          }
        })}

        {/*  <Line /> */}
      </Container>
      <Divider />
    </>
  );
}

export default Nota;

export const Container = styled.div`
  max-width: 700px;
  margin-right: 0;
  margin-bottom: 80px;
  margin-top: 120px;
  margin-left: 15%;
`;

export const Divider = styled.div`
  height: 0.5px;
  background-color: #f7e383;
  margin-top: 60;
  margin-bottom: 100px;
  width: 80px;
  margin: 0 auto;
`;
export const Titulo = styled.h1`
  font-family: "Tiempos", serif;
  font-size: 24px;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const Subtitulo = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: regular;
  font-size: 16px;
  margin-bottom: 44px;
`;

export const Parrafo = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const ParrafoBloque = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  margin-bottom: 52px;
`;

export const ParrafoGiro = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 32px;
  margin-top: 52px;
`;

export const ParrafoReflexivo = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: regular;
  font-size: 16px;
  margin-bottom: 40px;
`;

export const Insight = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 16px;
  margin-top: 48px;
`;

export const CierreBold = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 16px;
  margin-top: 52px;
`;

export const CierreRegular = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: regular;
  font-size: 16px;
`;

export const Saeta = styled.span`
  font-family: "Tiempos", serif;
  font-weight: bold;
  font-size: 16px;
  color: #111;
  display: inline;
`;
