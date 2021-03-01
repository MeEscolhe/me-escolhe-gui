import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { InputNumber } from 'antd';


export const InputAtom = styled(InputNumber)`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: none;
    outline: none;
    outline-style: none;
    border: none;
    border-bottom: solid ${ colors.gray } 1px;
    padding: 1vw;
    width: 90vw;
    margin-block-start: 2vw;
    margin-block-end: 2vw;
    &:focus, &:focus{
        outline: none !important;
    }
    &:focus, &:active, &:hover {
        box-shadow: none;
        border-bottom: solid ${ colors.gray } 1px;
        border-color: ${ colors.gray };
    }
    &:[type="password" i] {
        box-shadow: none;
        border: nonw;
    }
    
`;