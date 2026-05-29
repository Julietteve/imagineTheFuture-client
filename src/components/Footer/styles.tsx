import styled from "styled-components";

export const FooterContainer = styled.div<{ $showTopDivider?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 65%;
  margin: 0 auto;
  margin-top: 8rem;
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
  font-size: 1rem;
  color: #041414;
  margin-top: 2rem;
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Anchor = styled.a`
  color: grey;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  text-decoration: none;
  padding-top: 12px;

  :hover {
    color: #414141;
  }
`;

export const Logo = styled.img`
  width: 22%;
  margin-left: 1.5rem;
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
  margin-bottom: 0rem;
  margin-top: 2rem;
`;

export const BootomFooterSpan = styled.span`
  font-family: "Tiempos", sans-serif;
  color: darkgray;
  justify-content: center;
  font-size: 0.7rem;
  margin-bottom: 0.3rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  @media only screen and (max-width: 768px) {
    font-size: 0.6rem;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
  }
`;
