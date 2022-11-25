import React, { useEffect, useState } from 'react';
import { Container, Header, SocialBar } from '../../components';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom'
import { AboutMe, ColDiv, Info } from '../About/styles';
import { Box } from '../Main/styles';
import { serviceDetail } from '../../Data/Services';
import Loading from '../../components/Loading';

const ServiceDetail = () => {
    const location = useLocation();
    const [ data, setData ] = useState<IDataService>()
    const [ loading, setLoading ] = useState(false)
    
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
            {
                loading ? <Loading/>
                :
                <>
                    <div className='row'>
                        <div className='col-md-4 col-sm-12'>
                            <AboutMe> {data?.title} </AboutMe>
                        </div>
                        <div className='col-md-8 col-sm-12'>
                            {data?.data.map((item:string)=>(
                                <Info>{item}</Info>
                            ))}
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