import React from 'react';
import {FaLinkedinIn, FaInstagram, FaRegEnvelope,FaWhatsapp} from 'react-icons/fa'
import { Anchor, SocialContainer} from './styles';

let text = "Hi Inés, I am interested in booking a call "

const SocialBar = () => {
    return (
        <SocialContainer>
            <Anchor  href={`https://wa.me/19173715378?text=${text}`} target="_blank">
                <FaWhatsapp/>
            </Anchor>
            <Anchor href='https://www.linkedin.com/in/inesita/' target="_blank">
                <FaLinkedinIn/>
            </Anchor>
            <Anchor href='https://www.instagram.com/inesdlcroix/' target="_blank">
                <FaInstagram/>
            </Anchor>
            <Anchor  href='mailto:ma.ines@mac.com' target="_blank">
                <FaRegEnvelope/>
            </Anchor>
        </SocialContainer>
    );
};

export default SocialBar;