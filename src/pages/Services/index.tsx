import React from 'react';
import { Container, Header, SocialBar } from '../../components';
import { AboutMe, ColDiv } from '../About/styles';
import { Box } from '../Main/styles';

const Services = () => {
    return (
        <>
            <Header/>
            <SocialBar/>
            <Container children={
                <Box>
                    <AboutMe> Services. </AboutMe>
                    <ColDiv>
                    </ColDiv>
                </Box>
            }></Container>
        </>
    );
};

export default Services;