import styled from "styled-components";


export const Box = styled.div`
    display: flex ;
    flex-direction: row ;
    justify-content: space-around;
    width:98% ;
    box-sizing:border-box ;
`
export const AboutMe = styled.div`
    height:80vh ;
    display:flex ;
    align-items:center ;
    justify-content: center ;
    font-family: 'Cairo', sans-serif;
    font-size: 3rem ;
    padding: 5rem ;

    @media only screen and (max-width: 768px) {
        height:25vh ;
    }
`
export const Info = styled.div`
    font-family: 'Roboto', sans-serif;
    padding:.8rem ;
    font-weight:400 ;
    text-align: justify ;
    font-size: 1rem ;
    line-height:1.2 ;
    font-style:italic ;

    @media only screen and (max-width: 768px) {
        font-size: .8rem;
        line-height:1.5 ;
    }
    
    span{
        color:gray;
        font-style: normal ;
        font-family: 'Ovo',serif;
        letter-spacing:.5 ;
         @media only screen and (max-width: 768px) {
        font-size: .8rem
    }
    }
`

export const ColDiv = styled.div`
    display:flex ;
    flex-direction:column ;
    padding:2rem ;
`
export const ProfileImage = styled.img`
    width:100% ;
`
