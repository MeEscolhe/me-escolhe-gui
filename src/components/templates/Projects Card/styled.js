import styled from 'styled-components';
import { EditOutlined } from '@ant-design/icons'
import { Card as CardAntd } from 'antd';
import { CloseCircleOutlined as CloseSquare } from '@ant-design/icons';
import { Select } from '../../atoms'



export const Card = styled(CardAntd)`
    position:relative;
`;

export const Close = styled(CloseSquare)`
    position: absolute;
    right: 10px;
    top:2rem;
    fill:black;
    svg{
        width:2rem;
        height:2rem;
    }
`
export const Pencil = styled(EditOutlined)`
    position:absolute;
    right:10px;
    top:10px;
    svg{
        width:20px;
        height:20px;
    }
`;

export const ProjectCard = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    box-shadow:inset 0 4px 7px 1px #fff, inset 0 -5px 20px rgb(173 186 204 / 25%), 0 2px 6px rgb(0 21 64 / 14%), 0 10px 20px rgb(0 21 64 / 5%);
    padding:1rem;
    margin: 1rem 0rem;
`

export const SelectProjects = styled(Select)`
    width:100%;
`;
export const Legend = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin: 2%;
`;
export const ButtonsContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;

`;