import React, { useEffect, useState } from 'react';
import { Container, Header, SocialBar } from '../../components';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import SideBar from '../../components/SideBarMobile';
import { aboutData, howIHelp } from '../../Data/Services';
import { AboutMe, Info,Box,ColDiv, ProfileImage } from './styles';

const About = () => {

    const [ loading, setLoading ] = useState(false)
    const [ isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

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
            <SideBar isOpen={isOpen} toggle={()=>toggle()}></SideBar>
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
                        <div className='col-md-8 col-sm-12'>
                            <div className='generic-padding'>
                                <Info><strong> I was born in La Paz, Bolivia ...</strong></Info>
                                {
                                    aboutData.map((item,index)=>(
                                    index == 3 ? 
                                    <ProfileImage src='/images/if-about-1.jpeg'/>
                                    :
                                    <Info>{item}</Info>
                                    ))
                                }
                                <Info><strong>How I help coaching clients :</strong></Info>
                                {
                                    howIHelp.map((item,index)=>(
                                        <Info>→ {item}</Info>
                                    ))
                                }
                                <Info>
                                    <span>
                                        My mission is to help people find purpose, imagine and design a bright future.
                                    </span>
                                </Info>
                            </div>
                        </div>
                    </div>
                <Footer/>
                </>
            }
        </>
    );
};

export default About;