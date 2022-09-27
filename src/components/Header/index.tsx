import React from 'react';
import { MainContainer, MainLogoCircle, If, NavIcon} from './styles';

const Header = () => {
    return (
        <MainContainer>
            <MainLogoCircle>
                <If>if</If>
            </MainLogoCircle>
                <NavIcon to='/about'> About </NavIcon>
                <NavIcon to='/services'> Services </NavIcon>
                <NavIcon to='/faq'> Faq </NavIcon>
                <NavIcon to='/contact'> Contact </NavIcon>
                <NavIcon to='/blog'> Blog </NavIcon>
        </MainContainer>
    );
};

export default Header;