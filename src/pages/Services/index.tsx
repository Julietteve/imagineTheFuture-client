import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, SocialBar } from '../../components';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBarMobile';
import { AboutMe, ColDiv, Info } from '../About/styles';
import { howIHelp, mainService } from '../../Data/Services';
import { ServiceBox , ReadMore} from './styles';

const Services = () => {

    const [ isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const navigate = useNavigate();
    const handleConsultation = useCallback(() => navigate('/services/consulting', {replace: true}), [navigate]);
    const handleCoaching = useCallback(() => navigate('/services/coaching', {replace: true}), [navigate]);
    
    return (
        <>
            <Header/>
            <SocialBar/>
            <SideBar isOpen={isOpen} toggle={()=>toggle()}></SideBar>
            <div className='row'>
                <div className='col-md-4 col-sm-12' >
                    <AboutMe> Services. </AboutMe>
                </div>
                <div className='col-md-8 col-sm-12'>
                    <div className="generic-padding">
                        <div className="row">
                        <Info>
                            <div className='mission-tag'>
                                "My mission is to help people find purpose, imagine and design a bright future."
                            </div>
                        </Info>
                            <div className='col-md-6 col-sm-12 ' style={{justifyContent:"center",alignSelf:"center", alignItems:'center',display:'flex'}}>
                                <ServiceBox onClick={()=>handleConsultation()}>
                                    <p>Consulting</p>
                                    <ReadMore>
                                        <p>Read more</p>
                                        <p>→</p>
                                    </ReadMore>
                                </ServiceBox>
                            </div>
                            <div className='col-md-6 col-sm-12' style={{justifyContent:"center", alignSelf:"center",alignItems:'center', display:'flex'}}>
                                <ServiceBox onClick={()=>handleCoaching()} >
                                    <p>The Coaching Corner</p>
                                    <ReadMore>
                                        <p>Read more</p>
                                        <p>→</p>
                                    </ReadMore>
                                </ServiceBox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
                   
            <Footer/>
        </>
    );
};

export default Services;