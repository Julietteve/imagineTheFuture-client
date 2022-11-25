import React, { useEffect, useState } from 'react';
import { Container, Header, SocialBar } from '../../components';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { AboutMe,Box, ColDiv } from '../About/styles';
import { Form, Input, Label,Row, Textarea,Submit } from './styles';

const style = {
    display:"flex",
    padding:"8px 0px 30px ",
    color:"gray",
    fontFamily:"Roboto",
    fontSize:"14px",
    textDecoration:"underline"

}

const Contact = () => {
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
                            Contact Me.
                        </AboutMe>
                    </div>
                    <div className='col-md-8 col-sm-12'>
                        <Form>
                            <Label>Name</Label>
                            <Input></Input>
                            <Label>Last Name</Label>
                            <Input></Input>
                            <Label>Your e-mail</Label>
                            <Input></Input>
                            <Label>Your Message</Label>
                            <Textarea></Textarea>
                            <span style={style}><i>A free 30-minute consultation awaits. Let’s talk!</i></span>
                            <Submit>Send</Submit>
                        </Form>
                    </div>
                </div>
                <Footer/>
                </>
            }
        </>
    );
};

export default Contact;