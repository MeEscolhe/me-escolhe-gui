import styled from 'styled-components'
import { Title } from '../../atoms'
import { Avatar } from 'antd'

import { colors } from '../../../styles/colors'

export const HeaderProfile = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: center;
    background-image: linear-gradient(240deg, ${ colors.pink }, ${ colors.darkViolet });
`;

export const Config = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-block-start: 1%;
    margin-inline-end: 1%;
`;

export const User = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    margin-block-end: 3%;
`;

export const TitleComponent = styled(Title)`
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
`;

export const Skills = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-inline-end: 3%;
    margin-block-end: 1%;
`;

export const LogoComponent = styled(Avatar).attrs({styled})`
    display: flex;
    align-items: center;
    margin-inline-start: 5px;
    background: None;
    border: 2px dotted ${ colors.white };
    font-size: 14px !important;
`;