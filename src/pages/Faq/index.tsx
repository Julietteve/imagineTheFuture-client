import React from 'react';
import Collapsible from 'react-collapsible';
import { Container, Header, SocialBar } from '../../components';
import { faqs } from '../../Data/Services';
import { AboutMe, ColDiv } from '../About/styles';
import { Box } from '../Main/styles';
import { FaqsCont } from './styles';

const Faq = () => {
    return (
        <>
            <Header/>
            <SocialBar/>
            <div className='row'>
                <div className='col-md-4 col-sm-12'>
                    <AboutMe> FAQs. </AboutMe>
                </div>
                <div className='col-md-8 col-sm-12'>
                    <FaqsCont>
                        {
                            faqs.map((item)=>(
                                <>
                                <Collapsible className='question-faqs' trigger={item.question}>
                                    <p className='answer-faqs'>
                                        {item.question}
                                    </p>
                                </Collapsible>
                                <div className='underline-faq'></div>
                                </>
                            ))
                        }
                    </FaqsCont>
                    <span className='drop-a-line'>Drop me a line here:  ma.ines@mac.com</span>
                </div>
            </div>
        </>
    );
};

export default Faq;