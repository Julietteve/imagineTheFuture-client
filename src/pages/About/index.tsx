import React, { useEffect, useState } from 'react';
import { Container, Header, SocialBar } from '../../components';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { aboutData } from '../../Data/Services';
import { AboutMe, Info,Box,ColDiv, ProfileImage } from './styles';

const About = () => {

    const [ loading, setLoading ] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    return (
        <>
            <Header/>
            <SocialBar/>
            {
                loading ? <Loading/>
                :
                <>
                    <div className='row'>
                        <div className='col-md-4 col-sm-12'>
                            <AboutMe>
                                About.
                            </AboutMe>
                        </div>
                        <div className='col-md-8 col-sm-12' style={{paddingRight: "3rem"}}>
                            <Info><strong> I was born in La Paz, Bolivia ...</strong></Info>
                            <Info>{aboutData[0]}</Info>
                            <Info>{aboutData[1]}</Info>
                            <Info>{aboutData[2]}</Info>
                            <ProfileImage src='/images/if-about-1.jpeg'/>
                            <Info>{aboutData[3]}</Info>
                            <Info>{aboutData[4]}</Info>
                            <Info>{aboutData[5]}</Info>
                            <Info>{aboutData[6]}</Info>
                            <Info>
                                <span>
                                    My mission is to help people find purpose, imagine and design a bright future.
                                </span>
                            </Info>
                            <ProfileImage src='/images/if-about-2.jpeg'/>
                        </div>
                    </div>
                <Footer/>
                </>
            }
        </>
    );
};

export default About;