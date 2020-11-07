import styled from 'styled-components'
import { Title } from '../../atoms'

import { colors } from '../../../styles/colors'

export const HeaderProfile = styled.div`
    display: flex;   
    justify-content: center;
    flex-direction: column;    
    background-image: linear-gradient(240deg, ${ colors.pink }, ${ colors.darkViolet });
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    margin-block-start: 3%;
    margin-block-end: 5%;

`;

export const TitleComponent = styled(Title)`
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-inline-end: 3%; 
    margin-block-end: 1%;
   
`;
