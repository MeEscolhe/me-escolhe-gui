import styled from 'styled-components'

import { Select } from 'antd'

const { Option } = Select

export const Footer = styled.div``

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1%;
`

export const Header= styled.div`
    display: flex;
    margin-block-start: 2vw;
    margin-block-end: 2vw;
`

export const HeaderForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block-start: 2vw;
    margin-block-end: 2vw;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline-start: 5%;
    margin-inline-end: 5%;
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