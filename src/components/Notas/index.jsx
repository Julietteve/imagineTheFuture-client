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
    <Container>
      <Titulo>{titulo}</Titulo>

      {contenido.map((bloque, i) => {
        switch (bloque.tipo) {
          case "parrafo":
            return (
              <Parrafo key={i}>{renderTextWithLineBreaks(bloque.text)}</Parrafo>
            );

          case "bold":
            return <Bold key={i}>{renderTextWithLineBreaks(bloque.text)}</Bold>;
          case "italic":
            return (
              <Italic key={i}>{renderTextWithLineBreaks(bloque.text)}</Italic>
            );

          case "titulo":
            return (
              <Subtitulo key={i}>
                {renderTextWithLineBreaks(bloque.text)}
              </Subtitulo>
            );

          case "highlight":
            return (
              <Parrafo key={i}>
                <Highlight>{renderTextWithLineBreaks(bloque.text)}</Highlight>
              </Parrafo>
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

          case "divider":
            return <Divider key={i} />;

          default:
            return null;
        }
      })}

      {/*  <Line /> */}
    </Container>
  );
}

export default Nota;

export const Container = styled.div`
  padding: 24px;
  padding-bottom: 75px;
`;

export const Titulo = styled.h1`
  font-family: "Tiempos", serif;
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #111;
`;

export const Subtitulo = styled.h2`
  font-family: "Tiempos", serif;
  font-size: 1.125rem;
  margin-bottom: 24px;
  color: #111;
`;

export const Parrafo = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  line-height: 1;
  color: #333;
  margin-bottom: 12px;
`;

export const Bold = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  line-height: 1;
  color: #111;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Italic = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  line-height: 1;
  color: #111;
  font-style: italic;
  margin-bottom: 12px;
`;

export const Saeta = styled.span`
  font-family: "Tiempos", serif;
  font-weight: bold;
  font-size: 0.75rem;
  color: #111;
  display: inline;
`;

export const Highlight = styled.span`
  color: #787878;
  padding: 1.5px 4.5px;
  border-radius: 2px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ffffff;
  margin: 30px 0;
`;

export const Line = styled.div`
  width: 112px;
  height: 1px;
  background-color: #b7b7b7;
  margin: 45px 0;
`;
