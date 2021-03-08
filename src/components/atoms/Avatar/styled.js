import styled from 'styled-components'
import Icon from '@ant-design/icons'

export const IconComponent = styled(Icon)`
    display: flex;
    width: auto;
    margin: 2vw;
    font-size: ${({size}) => size ? (size-5) : 54}px !important;
`;