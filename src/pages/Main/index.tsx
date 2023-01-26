import React,{useState,useEffect} from 'react';
import { Container, Header, SocialBar } from '../../components';
import Loading from '../../components/Loading';
import SideBar from '../../components/SideBarMobile';
import { Consultant, Future, Image, Imagine, Ines, Text, SignBox, ArrowBox,Arrow,Box } from './styles';

const Main = () => {

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

    useEffect(()=>{ console.log(isOpen)},[isOpen])

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
                        <div className='col-md-6 col-sm-12' style={{alignItems:"center",display:"flex"}}>
                            <Text>
                                <Imagine>Imagine the</Imagine>
                                <Future>Future.</Future>
                                <ArrowBox>
                                    <Arrow src='/images/arrow.png'></Arrow>
                                    <SignBox>
                                        <Ines>Inés Fernández</Ines>
                                        <Consultant>Consultant & Certified Coach</Consultant>
                                    </SignBox>
                                </ArrowBox>
                            </Text>
                        </div>
                        <div className='col-md-6 col-sm-12' style={{alignItems:"center",justifyContent:'flex-end'}}>
                            <Image src='/images/main-land.jpeg'/>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Main;