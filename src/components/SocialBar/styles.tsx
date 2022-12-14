import styled from "styled-components";

export const SocialContainer = styled.div `
    display: flex;
    flex-direction: column ;
    justify-content: flex-end;
    position: fixed ;
    bottom: 1rem ;
    padding: 1rem ;
    @media only screen and (max-width: 768px) {
        display: none
    }
    
`
export const Anchor = styled.a`
    color: #000;
    font-size:1.3rem;
    padding-bottom: 15px ;
    padding-left: 1rem ;

    :hover{
        color:#414141
    }
`;