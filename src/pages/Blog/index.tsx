import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Header, SocialBar } from '../../components';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import SideBar from '../../components/SideBarMobile';
import { AboutMe } from '../About/styles';
import { Button } from 'react-bootstrap';
import { blogArticles } from '../../Data/Services';

const Blog = () => {

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
                        <div className='col-md-3 col-sm-12'>
                            <AboutMe>
                                Blog.
                            </AboutMe>
                        </div>
                        <div className='col-md-9 col-sm-12'>
                            <div className='generic-padding'>
                                <div className="row">
                                {blogArticles.map((item)=>(
                                    <div className="col-md-4 col-sm-12 offset-0.5 d-flex justify-content-center " style={{marginBottom: '10px'}}>
                                            <Card style={{ width: '18rem', fontFamily: 'Roboto' }}>
                                                <Card.Img variant="top" src="/images/interview.jpg" />
                                                <Card.Body>
                                                    <Card.Title>
                                                        <strong>{item.title}</strong>
                                                    </Card.Title>
                                                    <Card.Text>
                                                       <i>{item.text}</i> 
                                                    </Card.Text>
                                                    <Card.Link
                                                        target="_blank" 
                                                        rel="noopener noreferrer"  
                                                        href={item.link}
                                                    >
                                                        Read it Here
                                                    </Card.Link>
                                                </Card.Body>
                                            </Card>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
                </>
            }
        </>
    );
};

export default Blog;