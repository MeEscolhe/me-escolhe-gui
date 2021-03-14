import styled from 'styled-components';
import { EditOutlined } from '@ant-design/icons'
import { Card as CardAntd } from 'antd';


export const Card = styled(CardAntd)`
    position:relative;
`;

export const Pencil = styled(EditOutlined)`
    position:absolute;
    right:10px;
    top:10px;
    svg{
        width:20px;
        height:20px;
    }
`;