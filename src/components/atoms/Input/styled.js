import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Input } from 'antd';


export const InputAtom = styled(Input)`
    border-radius: 0px;
    outline: none;
    outline-style: none;
    border: none;
    border-bottom: solid ${ colors.gray } 1px;
    padding: 3px 10px;

    &:focus, &:focus{
      outline: none !important;
    }
    &:focus, &:active, &:hover {
      box-shadow: none;
      border-bottom: solid ${ colors.gray } 1px;
      border-color: ${ colors.gray };
    }
`;