import styled from 'styled-components';
import {NavLink as LinkIcon} from 'react-router-dom';

export const MainContainer = styled.div `
    width: 60%;
    display:flex ;
    flex-direction:row ;
    justify-content: space-around ;
    align-items: center;
    padding: 1rem ;
`
export const  MainLogoCircle = styled(LinkIcon)`
    width: 40px ;
    height: 40px ;
    background-color: #fff ;
    color:#000 ;
    border: #000 1px solid ;
    border-radius:1000px ;
    justify-content:center ;
    align-items:center ;
    display: flex ;
    text-decoration:none ;

    span{
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }

    &.active{
        background-color: #000 ;
        color:#fff;
    }
`
export const  If = styled.span`
   
`

export const NavIcon = styled(LinkIcon)`
    font-family: 'Roboto', sans-serif;
    font-size:.9rem ;
    letter-spacing: 1px ;
    text-transform: uppercase ;
    text-decoration:none ;
    color: gray;
    padding-left: 15px ;
    padding-right: 15px ;
    transition: all .2s ease-in-out;
    position: relative;
    &.active {
        color:#000;
        :after {
            content: '';
            height: 8px;
            width: 8px;
            background-color: #000;
            border-radius: 50%;
            display: inline-block;
            position: absolute;
            bottom: -15px;
            left: 45%;
        }
    }
`;