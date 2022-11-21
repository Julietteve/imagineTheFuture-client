import React from 'react';
import { Container, Header, SocialBar } from '../../components';
import Footer from '../../components/Footer';
import { AboutMe,Box, ColDiv } from '../About/styles';
import { Form, Input, Label,Row } from './styles';

const Contact = () => {
    return (
        <>
            <Header/>
            <SocialBar/>
            <Container children = {
                <Box>
                    <AboutMe> Contact Me. </AboutMe>
                    <ColDiv>
                        <Form>
                            <Label>Name</Label>
                            <Input></Input>
                            <Label>Last Name</Label>
                            <Input></Input>
                            <Label>Your e-mail</Label>
                            <Input></Input>
                            <Label>Your Message</Label>
                            <Input></Input>
                        </Form>
                    </ColDiv>
                </Box>
            }/>
            <Footer/>
        </>
    );
};

export default Contact;