import styled from 'styled-components'
import 'antd/dist/antd.css'
import { colors } from '../../../styles/colors'
import { Title, Text, Label } from '../../atoms'
import { Card } from 'antd'

export const CardMolecule = styled(Card)`
    width: 100vw;
    margin-top: 16;
    background-image: linear-gradient(240deg, ${ ({primary}) => primary }, ${ ({secundary}) => secundary });
`;

export const TitleComponent = styled(Title)`
    color: ${ colors.white } !important;
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
    margin-inline-start: 16px !important;
`;

export const Description = styled(Text)`
    color: ${ colors.white } !important;
`;

export const LabNameComponent = styled(Label)`
    color: ${ colors.white } !important;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 5%;
`;

export const DataHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16;
`;

export const Legend = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

