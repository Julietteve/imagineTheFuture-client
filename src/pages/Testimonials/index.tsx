import React from 'react';
import { Container, Header, SocialBar } from '../../components';
import Footer from '../../components/Footer';
import { AboutMe, ColDiv,Box } from '../About/styles';

const Testimonials = () => {
    return (
        <>
            <Header/>
            <SocialBar/>
            <Container children = {
                <Box>
                <AboutMe> Testimonials. </AboutMe>
                <ColDiv>
                </ColDiv>
            </Box>
            }/>
            <Footer/>
        </>
    );
};

export default Testimonials;