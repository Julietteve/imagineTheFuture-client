import styled from "styled-components";

export const CentralContent = styled.div`
  width: 100%;
  margin-left: 15vw;
  margin-right: 15vw;
  min-width: 0;
  max-width: 64vw;
  box-sizing: border-box;
  @media (max-width: 900px) {
    margin-left: 2vw;
    margin-right: 2vw;
    max-width: 96vw;
  }
`;
