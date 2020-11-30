import styled from 'styled-components'
import 'antd/dist/antd.css'

import { Card, Avatar } from 'antd'
import { colors } from '../../../styles/colors';


export const CardMolecule = styled(Card)`
    margin: 25vw;
    padding: 24px;

    .ant-card-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

    }
`;

export const Icon = styled(Avatar)`
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    size: 54vw !important;
    font-size: 100px !important;
    color: ${ ({ error }) => error ? colors.red : colors.green };
    border: 1px solid ${ ({ error }) => error ? colors.red : colors.green };
    margin: 5vw;
    
    
`
