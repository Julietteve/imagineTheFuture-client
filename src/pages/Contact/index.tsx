import React, { useEffect, useRef, useState } from 'react';
import { MutableRefObject } from "react"
import { Container, Header, SocialBar } from '../../components';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import SideBar from '../../components/SideBarMobile';
import { AboutMe,Box, ColDiv } from '../About/styles';
import { Form, Input, Label,Row, Textarea,Submit } from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import apiKey from "../../keys"
import { useNavigate } from 'react-router-dom';

const style = {
    display:"flex",
    padding:"8px 0px 30px ",
    color:"gray",
    fontFamily:"Roboto",
    fontSize:"12px",
    textDecoration:"underline"

}

const Contact = () => {

    const navigate = useNavigate();
    const [ loading, setLoading ] = useState(false)
    const [ isOpen, setIsOpen] = useState(false)
    const [ savedState, setSavedState] = useState({
        save:{
            name:"",
            email:"",
            surname:""
        }
       
    })
    const form = useRef<any>();

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    const notify = (e:any) => {
        e.preventDefault()
       emailjs.sendForm( apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, form.current, apiKey.PUBLIC_KEY)
        .then((result) => {
            if(result.text == 'OK'){
                toast("Message sent successfully!")
                setTimeout(()=>{
                    navigate('/')
                },4000)
            };
        }, (error) => {
            console.log(error.text);
                toast("Error sending message")
        })

    } 

    
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
                            Contact Me.
                        </AboutMe>
                    </div>
                        <div className='col-md-8 col-sm-12'>
                            <div className="generic-padding">
                                <Form ref={form} onSubmit={notify}>
                                    <Label>Name</Label>
                                        <Input type="text" name="from_name" required></Input>
                                    <Label>Last Name</Label>
                                        <Input type="text" name="from_last_name"></Input>
                                    <Label>Your e-mail</Label>
                                        <Input type="email" name="reply_to" required></Input>
                                    <Label>Your Message</Label>
                                        <Textarea name="message" required></Textarea>
                                        <span style={style}><i>A free 30-minute consultation awaits. Let’s talk!</i></span>
                                    <Submit  type="submit" >Send</Submit>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                <Footer/>
                </>
            }
        </>
    );
};

export default Contact;