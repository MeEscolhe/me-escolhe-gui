import styled from 'styled-components'
import 'antd/dist/antd.css'
import { InputTextArea } from '../../atoms'
import { Select } from 'antd'

const { Option } = Select


export const SelectComponent = styled(Select)`
    margin-block-start: 3%;
    margin-block-end: 3%;
`;

export const OptionComponent = styled(Option)``;


export const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline-start: 5%;
    margin-inline-end: 5%;
`;
export const HeaderForm = styled.div`
    display: flex;
    justify-content: center;
    margin-block-start: 2%;
    margin-block-end: 5%;
`;

export const Description = styled(InputTextArea)`
    margin-block-end: 10%;
`;

export const Legend = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2%;
`;

export const LegendOption = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;