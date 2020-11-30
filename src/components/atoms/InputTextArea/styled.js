import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Input } from 'antd';

const { TextArea } = Input;

export const TextAreaComponent = styled(TextArea)`
    &:focus, &:active, &:hover {
      box-shadow: none;
      border-color: ${ colors.gray };
    }
`;