import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Input } from 'antd';


export const InputAtom = styled(Input)`
    display: flex;
    border-radius: 0px;
    outline: none;
    outline-style: none;
    border: none;
    border-bottom: solid ${ colors.gray } 1px;
    padding: 3px 10px;
    width: auto;
    margin-block-start: 24px;
    margin-block-end: 24px;

    &:focus, &:focus{
      outline: none !important;
    }
    &:focus, &:active, &:hover {
      box-shadow: none;
      border-bottom: solid ${ colors.gray } 1px;
      border-color: ${ colors.gray };
    }
`;