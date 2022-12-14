import styled from 'styled-components/macro';

export const Container = styled.div`
    display:none;
    @media only screen and (max-width: 768px) {
    width:100%;
    height:60px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background-color: white
}
`;

export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    left:1.5rem;
    background: transparent;
    font-size:2rem;
    outline:none;
    cursor: pointer;
    color: black;
    `;