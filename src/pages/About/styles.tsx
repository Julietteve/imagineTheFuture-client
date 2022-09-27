import styled from "styled-components";


export const Box = styled.div`
    display: flex ;
    flex-direction: row ;
    justify-content: space-between ;
    width:80% ;
    box-sizing:border-box ;
`
export const AboutMe = styled.div`
    height:80vh ;
    display:flex ;
    align-items:center ;
    justify-content: center ;
    font-family: 'Cairo', sans-serif;
    font-size: 3rem ;
    padding:2rem ;
    flex:1
`
export const Info = styled.div`
    font-family: 'Roboto', sans-serif;
    padding:1rem ;
    text-align: justify ;
    font-size: 1rem ;
    line-height:1.2 ;
    font-style:italic ;

    span{
        color:gray;
        font-style: normal ;
        font-family: 'Cairo', sans-serif;
        letter-spacing:.5 ;
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