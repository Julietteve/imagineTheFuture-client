import styled from "styled-components";

export const FooterContainer = styled.div<{ $showTopDivider?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 65%;
  margin: 0 auto;
  margin-top: 3rem;
  ${({ $showTopDivider }) =>
    $showTopDivider && `border-top: 1px solid #e5e5e5;`}

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Data = styled.div`
  display: flex;
  align-items: stretch;
  margin-top: -1rem;
  justify-content: space-around;
  flex-direction: row;
`;

export const Title = styled.h5`
  font-family: "Tiempos", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  color: #041414;
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Anchor = styled.a`
  color: grey;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  text-decoration: none;
  padding-top: 15px;

  :hover {
    color: #414141;
  }
`;

export const Logo = styled.img`
  width: 20%;
  margin-left: 2rem;
  cursor: pointer;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const BootomFooter = styled.div`
  width: 50%;
  border-top: lightgray 1px solid;
  margin-bottom: 0.8rem;
`;

export const BootomFooterSpan = styled.span`
  font-family: "Tiempos", sans-serif;
  color: darkgray;
  justify-content: center;
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media only screen and (max-width: 768px) {
    font-size: 10px;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;
