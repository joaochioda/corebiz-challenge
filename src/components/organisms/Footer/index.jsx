import React from 'react';
import { BackgroundColor, Container } from './style';
import LogosFooter from '../../../assets/LogosFooter.svg';
import PhoneIcon from '../../../assets/PhoneIcon.svg';
import MessageIcon from '../../../assets/MessageIcon.svg';

import { Localization } from '../../molecules/Localization';
import { ButtonIconText } from '../../molecules/ButtonIconText';

export const Footer = () => (
    <BackgroundColor>
        <Container>
            
        <div className="localization">
            <Localization />
        </div>
        <div className="buttons">
            <ButtonIconText text={"ENTRE EM CONTATO"} image={PhoneIcon}/>
            <ButtonIconText text={"FALE COM O NOSSO CONSULTOR ONLINE"} image={MessageIcon}/>
        </div>
        <div className="logos">
         <img src={LogosFooter} alt="logos"/>
        </div>
        </Container>
    </BackgroundColor>
);