import React from 'react';
import {FaLinkedinIn, FaInstagram, FaRegEnvelope} from 'react-icons/fa'
import { Anchor, SocialContainer} from './styles';

const SocialBar = () => {
    return (
        <SocialContainer>
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