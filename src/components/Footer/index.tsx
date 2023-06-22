import React , { useCallback} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FooterData } from '../../Data/Footer';
import { Bottom,FooterContainer, DataContainer,Data,Logo,Title, Anchor, BootomFooter, BootomFooterSpan } from './styles';

let styleLink = {
    color: "grey",
    fontFamily: 'Roboto',
    fontSize:"14px" ,
    textDecoration: "none",
    paddingTop:'15px'

}

const Footer = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
    
    return (
        <>
        <FooterContainer>
            <Logo src='/images/main-logo.png' onClick={handleOnClick}></Logo>
            <Data>
                {FooterData.map((item,index)=>(
                    <DataContainer key={index}>
                        <Title>{item.title}</Title>
                        {item.data.map((anchor)=>(
                            anchor.external ?
                            <Anchor target={"_blank"} href={anchor.url}>{anchor.name}</Anchor>
                            :
                            <Link style={styleLink} to={anchor.url}>{anchor.name}</Link>
                        ))}
                    </DataContainer>
                ))}
            </Data>
        </FooterContainer>
        <Bottom>
            <BootomFooter/>
            <BootomFooterSpan> ©{new Date().getFullYear()} Imagine the future by Inés Fernández</BootomFooterSpan>
        </Bottom>
        </>
    );
};

export default Footer;