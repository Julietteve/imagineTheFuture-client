import React, {useState, useEffect} from 'react';
import { Container, Header, SocialBar } from '../../components';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../../components/Footer';
import { AboutMe, ColDiv,Box } from '../About/styles';
import Loading from '../../components/Loading';
import SideBar from '../../components/SideBarMobile';

const imgs = [ "1","2","3","4","5","6","7","8","9","10","11","12","13","14"]

const Testimonials = () => {

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
                    <AboutMe> Testimonials. </AboutMe>
                  </div>
                  <div className='col-md-8 col-sm-12'>
                    <Carousel style={{padding:"3rem"}} slide={false}>
                      {
                        imgs.map((item)=>(
                          <Carousel.Item>
                            <img
                              style={{width:"20%"}}
                              className="d-block w-100"
                              src={`/images/${item}.jpeg`}
                              alt="First slide"
                            />
                          </Carousel.Item>
                        ))
                      }
                    </Carousel>
                  </div>
                </div>
              <Footer/>
              </>
            }
        </>
    );
};

export default Testimonials;