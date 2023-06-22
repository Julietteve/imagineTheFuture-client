import React from 'react';
import {IconLink, Container, Icon, CloseIcon, Links, Social, NavIcon} from './styles';
import {FaLinkedinIn, FaInstagram, FaRegEnvelope,FaWhatsapp} from 'react-icons/fa'
import {MobileNav} from '../index'

let text = "Hi Inés, I am interested in booking a call "

interface IProps {
    toggle(): any,
    isOpen:boolean
}

const SideBar = ( {toggle,isOpen}: IProps ) => {

    return (
        <div>
            <MobileNav toggle={toggle}/>
            <Container isOpen={isOpen} onClick={toggle}>
                <Icon>
                    <CloseIcon onClick={toggle}/>
               </Icon>
               <Links>
                    <NavIcon to="/">Home</NavIcon>
                    <NavIcon to="/about">About</NavIcon>
                    <NavIcon to="/services">Services</NavIcon>
                    <NavIcon to="/faq">FAQ</NavIcon>
                    <NavIcon to="/testimonials">Testimonials</NavIcon>
                    <NavIcon to="/contact">Contact</NavIcon>
               </Links>
               <Social>
                    <IconLink 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href={`https://wa.me/19173715378?text=${text}`}
                    >
                            <FaWhatsapp/>
                    </IconLink>
                    <IconLink
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href='https://www.linkedin.com/in/inesita/'
                    >
                        <FaLinkedinIn/>
                    </IconLink>
                    <IconLink
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href='https://www.instagram.com/inesdlcroix/'
                    >
                        <FaInstagram/>
                    </IconLink>
                    <IconLink
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href='mailto:ines.imaginethefuture@gmail.com'
                    >
                        <FaRegEnvelope/>
                    </IconLink>
               </Social>
       </Container>
        </div>
    );
};

export default SideBar;