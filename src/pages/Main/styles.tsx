import styled from "styled-components";

export const Box = styled.div`
    display: flex ;
    flex:1 ;
    flex-direction: row ;
    justify-content: space-between ;
    box-sizing: border-box ;
    width:80% ;
`
export const Text = styled.div`
    height: auto ;
    display: flex ;
    justify-content: center ;
    align-items: center ;
    flex-direction: column ;
    @media only screen and (max-width: 768px) {
        height: 100vh ;
    }
`
export const Image = styled.img`
    @media only screen and (max-width: 768px) {
    width:100% ;
    margin-right: 0rem ;
    }
    width:80% ;
    margin-right: 2rem ;
`

export const Imagine = styled.div`
    font-family: 'Big Shoulders Display', cursive;
    color: gray;
    text-align: left ;
    font-size: 4rem ;
`

export const Future = styled.div`
    font-family: 'Cairo', sans-serif;
    text-align: right ;
    font-size: 4.5rem ;
    line-height:.6 ;
    margin-left:30%
`

export const Arrow = styled.img`
    width: 10% ;
`
export const ArrowBox = styled.div`
    display: flex ;
    flex-direction: row ;
    justify-content:center ;
    align-items:center ;
`
export const SignBox = styled.div`
    display: flex ;
    width:50% ;
    justify-content: flex-end ;
    flex-direction: column ;
    text-align:right ;
`

export const Ines = styled.span`
    font-family: 'Roboto',sans-serif;
    text-transform: uppercase;
    color: #000 ;
    font-weight:600 ;
    margin-top: 3rem ;
    font-size:1.1rem ;
`

export const Consultant = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: italic ;
    color: #000 ;
    font-weight:500 ;
    font-size:1rem ;
`