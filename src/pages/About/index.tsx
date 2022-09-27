import React from 'react';
import { Container, Header, SocialBar } from '../../components';
import { AboutMe, Info,Box,ColDiv, ProfileImage } from './styles';

const About = () => {
    return (
        <>
            <Header/>
            <SocialBar/>
            <Container children={
                <Box>
                    <AboutMe>
                        About.
                    </AboutMe>
                    <ColDiv>
                        <Info>
                            <strong> I was born in La Paz, Bolivia ...</strong>
                        </Info>
                        <Info>
                            My work spans industries including tech, hospitality, financial services, healthcare, luxury, education and international affairs. I have lived and worked in more than 50 countries in 5 continents and speaks several languages with a powerful cultural and DEI lens that I integrate into everything I do. 
                        </Info>
                        <Info>
                            I leverage my rich personal and professional experiences to partner and help early to senior level professionals develop their leadership, managerial skills, and design their next chapter in life and work. My approach is holistic and starts with exploration and discovery, assessment and figuring out what challenges or issues the client needs to solve. This entails finding real motivation, identifying blocks, assessing strengths, talent and unfulfilled dreams. My focus is based on providing amazing client experiences that lead to setting goals, outcomes and deliberate action. I believe I have the ability to translate my knowledge and experience to serve my clients - individuals and organizations - and make sure they achieve and surpass their goals. 
                        </Info>
                        <Info>
                            For the past seven years I have advised startups from tech, life sciences, finance, education and social impact. From strategy, culture, talent and people initiatives to designing programs and agile systems to drive growth and sustainable results. As a certified coach from the Life Purpose Institute credentialed by International Coaching Federation (ICF), I have partnered and helped 100+ clients change and improve their lives.
                        </Info>
                        <Info>
                            I have a B.S.in Business Administration from Pace University and an MBA from the European Business School focused on International Management.
                        </Info>
                        <Info>
                            <span>
                                My mission is to help people find purpose, imagine and design a bright future.
                            </span>
                        </Info>
                        <ProfileImage src='/images/if-about.jpeg'/>
                    </ColDiv>
                </Box>
            }/>
        </>
    );
};

export default About;