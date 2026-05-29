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
        <Divider />
      </Container>
    </>
  );
}

export default Nota;

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 16px;
  margin-left: 5%;

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 0 8px;
  }
`;

export const Divider = styled.div`
  height: 0.5px;
  background-color: #f7e383;
  margin-bottom: 100px;
  margin-top: 50px;
  width: 120px;

  @media (max-width: 600px) {
    width: 60px;
    margin-bottom: 50px;
    margin-top: 30px;
  }
`;
export const Titulo = styled.h1`
  font-family: "Tiempos", serif;
  font-size: 26px;
  margin-bottom: 16px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const Subtitulo = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: regular;
  font-size: 18px;
  margin-bottom: 44px;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 24px;
  }
`;

export const Parrafo = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  margin-bottom: 12px;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 8px;
  }
`;

export const ParrafoBloque = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  margin-bottom: 52px;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 24px;
  }
`;

export const ParrafoGiro = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 32px;
  margin-top: 52px;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 16px;
    margin-top: 24px;
  }
`;

export const ParrafoReflexivo = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: regular;
  font-size: 18px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 18px;
  }
`;

export const Insight = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 18px;
  margin-top: 48px;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-top: 24px;
  }
`;

export const CierreBold = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 18px;
  margin-top: 52px;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-top: 24px;
  }
`;

export const CierreRegular = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: regular;
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Saeta = styled.span`
  font-family: "Tiempos", serif;
  font-weight: bold;
  font-size: 18px;
  color: #111;
  display: inline;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
