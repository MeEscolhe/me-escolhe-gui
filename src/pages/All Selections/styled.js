import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Content = styled.div`
    padding-inline-start: 10%;
    padding-inline-end: 10%;
`;

export const Header = styled.div`
    display: flex;
    padding-block-start: 2%;
    border-bottom: 1px solid  ${ colors.ice };
    margin-left: 10%;
    margin-right: 10%;
    justify-content: space-between;
`;

export const Search = styled.div`
    display: flex;
    width: 50%;
    padding-block-end: 1%;
`;
