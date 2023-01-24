import styled from "styled-components";

export const Form = styled.form`
    padding:2rem ;
    width:80% ;
    height: 80vh;
    align-self:center ;

    @media only screen and (max-width: 768px) {
        padding:2rem ;
        width:100% ;
        height: auto;
    }
`

export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    color: darkgray ;
    font-size:14px ;
    @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const Row = styled.div `
    padding-top:2rem ;
    flex-direction:row ;
    display:flex ;
    justify-content:space-between ;

`
export const Input = styled.input `
  width: 100%;
  font-family: 'Roboto', sans-serif;
  padding: 8px 0;
  font-size: 16px;
  color: black;
  margin-bottom: 8px;
  border: none;
  border-bottom: 1px solid darkgray;
  outline: none;
  background: transparent;

  
`

export const Textarea = styled.textarea `
  width: 100%;
  font-family: 'Roboto', sans-serif;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid darkgray;
  outline: none;
  background: transparent;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
  
`

export const Submit = styled.button `
  appearance: none;
  border: 1px solid black;
  background-color: transparent ;
  border-radius: 30px;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: "Roboto";
  text-transform: uppercase;
  font-size: 16px;
  line-height: normal;
  margin: 0;
  min-height: 50px;
  min-width: 0;
  outline: none;
  padding: 16px 16px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 25%;
  will-change: transform;
  align-self: flex-start ;

    :disabled {
    pointer-events: none;
    }

    :hover {
    transform: translateY(-2px);
    background-color: black ;
    border:none;
    color:white
    }

    :active {
    box-shadow: none;
    transform: translateY(0);
    }

    @media only screen and (max-width: 768px) {
        width:40% ;
        font-size: 14px;
    }
` 