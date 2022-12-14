import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content:space-between ;
    align-items: center ;
    flex-direction: row ;
    width:95% ;

    @media only screen and (max-width: 768px) {
        display: none ;
    }
`

export const Data = styled.div`
    display:flex ;
    align-items:stretch ;
    justify-content: space-around;
    flex-direction: row;
`

export const Title = styled.h5`
    font-family: 'Roboto', sans-serif;
    font-weight: bold ;
`

export const DataContainer = styled.div`
    display:flex ;
    justify-content:flex-start ;
    flex-direction:column ;
    margin-left:20px;
    margin-right: 20px;
`

export const Anchor = styled.a`
    color: grey;
    font-family: 'Roboto', sans-serif;
    font-size:14px ;
    text-decoration: none;
    padding-top:15px ;

    :hover{
        color:#414141
    }

    
`;

export const Logo = styled.img`
    width: 20% ;
    margin-left:6rem;
    cursor: pointer;
`

export const Bottom = styled.div`
  display: flex ;
  justify-content: center;
  align-items:center ;
  width:100% ;
  flex-direction:column ;
`

export const BootomFooter = styled.div`
   width: 50% ;
   border-top: lightgray 1px solid;
   margin-bottom: .8rem ;
`

export const BootomFooterSpan = styled.span`
    font-family: 'Roboto', sans-serif;
    color: darkgray;
    justify-content: center ;
    font-size:12px ;
    margin-bottom:.4rem ;

    @media only screen and (max-width: 768px) {
        font-size: 10px ;
        margin-top: .8rem ;
        margin-bottom: .8rem ;
    }
`

