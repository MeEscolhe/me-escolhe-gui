import styled from 'styled-components'
import { Title, Label } from '../../components/atoms'
import { Card } from 'antd'
import { colors } from '../../styles/colors';

export const CardMolecule = styled(Card)`
    width: 100vw;
`;
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin-block-start: 3%;
    margin-block-end: 5%;
    align-items: center;
`

export const Content = styled.div``

export const Name = styled(Title)`
    color: ${ colors.darkGray } !important;
` 

export const Email = styled(Label)`
    color: ${ colors.gray } !important;
` 