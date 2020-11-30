import styled from 'styled-components'
import { Avatar } from 'antd'

export const Content = styled.div`
    margin-block-start: 3%
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline-start: 2%;
    margin-block-end: 2%;
`;

export const Level = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LogoComponent = styled(Avatar)`
    margin-inline-start: 5px;
    background: ${ ({color}) => color };
    font-size: 14px !important;
`;
