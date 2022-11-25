import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Header, SocialBar } from '../../components';
import Footer from '../../components/Footer';
import { mainService } from '../../Data/Services';
import { AboutMe, ColDiv, Info } from '../About/styles';
import { Row } from '../Contact/styles';
import { Box } from '../Main/styles';
import { ServiceBox , ReadMore} from './styles';

const Services = () => {

    const navigate = useNavigate();
    const handleConsultation = useCallback(() => navigate('/services/consulting', {replace: true}), [navigate]);
    const handleCoaching = useCallback(() => navigate('/services/coaching', {replace: true}), [navigate]);
    
    return (
        <>
            <Header/>
            <SocialBar/>
            <div className='row'>
                <div className='col-md-4 col-sm-12' >
                    <AboutMe> Services. </AboutMe>
                </div>
                <div className='col-md-8 col-sm-12' style={{paddingRight: "3rem"}} >
                    {
                        mainService.map((item,index)=>(
                            <Info>{item}</Info>
                        ))
                    }
                    <Row>
                        <ServiceBox onClick={()=>handleConsultation()}>
                            <p>Consulting</p>
                            <ReadMore>
                                <p>Read more</p>
                                <p>→</p>
                            </ReadMore>
                            </ServiceBox>
                        <ServiceBox onClick={()=>handleCoaching()} >
                            <p>Individual & Group Coaching</p>
                            <ReadMore>
                                <p>Read more</p>
                                <p>→</p>
                            </ReadMore>
                        </ServiceBox>
                    </Row>
                </div>
            </div>
                    
                   
            <Footer/>
        </>
    );
};

export default Services;