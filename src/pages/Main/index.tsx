import React from 'react';
import { Container, Header, SocialBar } from '../../components';
import { Consultant, Future, Image, Imagine, Ines, Text, SignBox, ArrowBox,Arrow,Box } from './styles';

const Main = () => {
    return (
        <>
            <Header/>
            <SocialBar/>
            <Container children={
                <Box>
                    <Text>
                        <Imagine>Imagine the</Imagine>
                        <Future>Future.</Future>
                        <ArrowBox>
                            <Arrow src='/images/arrow.png'></Arrow>
                            <SignBox>
                                <Ines>Inés Fernandez</Ines>
                                <Consultant>Consultant & Certified Coach</Consultant>
                            </SignBox>
                        </ArrowBox>
                    </Text>
                        <Image src='/images/main-land.jpeg'/>
                </Box>
            }/>
        </>
    );
};

export default Main;