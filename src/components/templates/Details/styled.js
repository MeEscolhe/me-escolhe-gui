import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Title } from '../../atoms'

export const Job = styled(Title)`
    margin-block-start: 0 !important;
    margin-block-end: 1em !important;
`;

export const Legend = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
