import styled from 'styled-components'
import { Tag } from 'antd';

export const TagComponent = styled(Tag).attrs(style => {
})`
    border-radius: 5px;
    font-size: 14px;
    margin: 1%;
    padding: 1%;
    background: ${({color}) => color } !important;

`;
