import styled from "styled-components";

export const ServiceBox = styled.div`
    width:70% ;
    min-height:120px;
    cursor: pointer;
    opacity:1 ;
    margin-top:2rem ;

    p{
        font-size:25px;
        font-family: "Roboto";
        padding-bottom:2.5rem ;
        @media only screen and (max-width: 768px) {
            font-size:20px;
        }
    }

    :hover{
        opacity:.7 ;
    }

    @media only screen and (max-width: 768px) {
        width:70% ;
        justify-content:center ;
        padding-top:1rem ;
    }
`

export const ReadMore = styled.div`
    display: flex;
    justify-content:space-between ;
    border-top: 1px darkgray solid ;

    p{
        font-size:14px;
        font-family: "Roboto";
        @media only screen and (max-width: 768px) {
            font-size:12px;
        }
    }
`