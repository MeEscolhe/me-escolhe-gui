import styled from 'styled-components'
import 'antd/dist/antd.css'
import { Input } from 'antd'
import {colors} from '../../../styles/colors'

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline-start: 5%;
    margin-inline-end: 5%;
    margin-block-start: 5%;
    margin-block-end: 5%;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    margin-block-start: 2%;
    margin-block-end: 5%;
`;

export const Legend = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2%;
`;

export const Password = styled(Input.Password)`
    border-bottom: solid ${ colors.gray } 1px;
    border-top: none;
    border-left: none;
    border-right: none;
    box-shadow: none !important;
    border-color: ${ colors.gray } !important;
`
