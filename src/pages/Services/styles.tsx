import styled from "styled-components";

export const ServiceBox = styled.div`
    width:30% ;
    min-height:120px;
    cursor: pointer;
    opacity:1 ;

    p{
        font-size:25px;
        font-family: "Roboto";
        padding-bottom:2.5rem ;
    }

    :hover{
        opacity:.7 ;
    }
`

export const ReadMore = styled.div`
    display: flex;
    justify-content:space-between ;
    border-top: 1px darkgray solid ;

    p{
        font-size:14px;
        font-family: "Roboto";
    }
`