import styled from 'styled-components'
import { Title } from '../../atoms'

import { colors } from '../../../styles/colors'

export const Header = styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: flex-start;
    padding: 2%;
    padding-block-end: 5%;
    background-image: linear-gradient(240deg, ${ colors.pink }, ${ colors.darkViolet });
`;

export const User = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: baseline;
    justify-content: center;
    padding: 2%;
`;

export const TitleComponent = styled(Title)`
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
`;
