import React, { useEffect, useState } from 'react';
import { Container, Header, SocialBar } from '../../components';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom'
import { AboutMe, ColDiv, Info, ProfileImage } from '../About/styles';
import { Box } from '../Main/styles';
import { serviceDetail, serviceDetailOut } from '../../Data/Services';
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
            else if(path == 'coaching'){
                setData(serviceDetail[0])
            }
            else{
                setData(serviceDetail[2])
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
                                { (data?.title === "The Coaching Corner." || data?.title ===  "Consulting.")  ?
                                    data?.data.map((item:string, index:number)=>(
                                    <div key={index}> 
                                        { 
                                            index == (data?.title == "The Coaching Corner."  ?  (3) : null ) ?
                                                <Info align='center' weight='bolder' italic={'none'}>{item}</Info> 
                                                :
                                            index == (data?.title == "The Coaching Corner."  ?  (4) : null ) ?
                                                <Info align='center' weight='400' italic={'none'}>{item} </Info>
                                                :
                                            index == (data?.title == "The Coaching Corner."  ?  (5) : null ) ?
                                                <Info align='center' weight='400' italic={'none'}>{item} </Info>
                                                :
                                                <Info align='justify' weight='400' italic={'none'}>{item}</Info>}
                                        {
                                            index == (data?.title == "The Coaching Corner." ? 2 : 1) &&
                                                <ProfileImage src={ data?.title == "The Coaching Corner." ? '/images/coaching-corner.png' : '/images/consulting.png'}/>
                                        }
                                    </div>
                                ))
                                :
                                <>
                                    <Info align='justify' weight='bolder' italic='italic'>Helping People Move Forward</Info>
                                    <div className='row m-3'>
                                        <div className='col-md-6 col-sm-12 mb-2'>
                                            <img width={'90%'} src="/images/LEFT.png" alt="" />
                                        </div>
                                        <div className='col-md-6 col-sm-12 '>
                                            <img width={'90%'} src="/images/RIGHT.png" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <Info align='justify' italic='none' weight='bolder'>Who is this for?</Info>
                                        {   serviceDetailOut.forWho.map((item) => (
                                             <Info align='justify' italic='none' weight='400'><li>{item}</li></Info>
                                         
                                        ))}
                                        <Info align='justify' italic='none' weight='bolder'>Benefits</Info>
                                        {   serviceDetailOut.benefits.map((item) => (
                                            <Info align='justify' italic='none' weight='400'><li>{item}</li></Info>
                                        ))}
                                        <Info align='justify' italic='none' weight='bolder'>Offering includes different packages / pricing options.</Info>
                                        <Info align='justify' italic='none' weight='bolder'/>
                                        <Info align='justify' italic='italic' weight='400'>{serviceDetailOut.footer}</Info>
                                    </div>
                                </>
                                    
                                }
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