import React, { useEffect, useState } from 'react';
import { Container, Header, SocialBar } from '../../components';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom'
import { AboutMe, ColDiv, Info, ProfileImage } from '../About/styles';
import { Box } from '../Main/styles';
import { serviceDetail } from '../../Data/Services';
import Loading from '../../components/Loading';
import SideBar from '../../components/SideBarMobile';

const ServiceDetail = () => {
    const location = useLocation();
    const [ data, setData ] = useState<IDataService>()
    const [ loading, setLoading ] = useState(false)
    const [ isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    useEffect(()=>{
        setLoading(true)
        const path = location.pathname.split('/')[2]
        setTimeout(()=>{
            if(path == 'consulting'){
                setData(serviceDetail[1])
            }
            else{
                setData(serviceDetail[0])
            }
            setLoading(false)
        },2000)
        
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
                            <AboutMe> {data?.title} </AboutMe>
                        </div>
                        <div className='col-md-8 col-sm-12'>
                            <div className="generic-padding">
                                {data?.data.map((item:string, index:number)=>(
                                    <>
                                        <Info>{item}</Info>
                                        {
                                            index == 0 &&
                                                <ProfileImage src={ data?.title == "COACHING" ? '/images/coaching-corner.png' : '/images/consulting.png'}/>
                                        }
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </>
            }
        </>
    );
};


interface IDataService {
    title:string,
    data: any
}

export default ServiceDetail;