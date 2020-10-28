import styled from 'styled-components'
import { Timeline } from 'antd';
import { Title } from '../../atoms'
import { colors } from '../../../styles/colors'

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Header = styled.div`
    display: flex;
    margin-block-start: 2%;
    margin-block-end: 2%;
    margin-inline-start: 2%;
`;

export const TimeLine = styled(Timeline)`
    .element.style {
        border-color: black;
    }
`;

export const Experience = styled(Timeline.Item).attrs(style => {})`
    font-size: 20px;
    margin-inline-start: 3%;
    padding-bottom: 5%;

    .element.style {
        border-color: ${ colors.violet } !importante;
        color: ${ colors.violet } !importante;
        background: ${ colors.violet } !importante;
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
`;

export const TitleComponent = styled(Title)`
    margin-top: 0 !important; 
`;