import styled from 'styled-components'

import { Select } from 'antd'

const { Option } = Select

export const Footer = styled.div``

export const Content = styled.div``

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-block-start: 5%;
    margin-block-end: 5%;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline-start: 5%;
    margin-inline-end: 5%;
    margin-block-start: 5%;
    margin-block-end: 5%;
`

export const Legend = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-block-start: 10%;
    margin-block-end: 5%;
`
export const SelectComponent = styled(Select)``;

export const OptionComponent = styled(Option)``;