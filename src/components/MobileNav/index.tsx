import React from 'react';
import {MdMenu} from 'react-icons/md'
import {Container, Icon} from './styles';

interface IProps {
    toggle(): any,
}

const MobileNav = ({toggle}: IProps) => {
    return (
        <Container >
            <Icon onClick={toggle}>
               <MdMenu/>
            </Icon>
        </Container>
    );
};

export default MobileNav;