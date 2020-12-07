import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import 'antd/dist/antd.css';

import { Button } from 'antd';

export const ButtonAtom = styled(Button)`
    background-color: ${ ({color}) => color ? color: colors.pink };
    color: ${ colors.white };
    border-color: ${ ({color}) => color ? color: colors.pink };
    width: ${({width}) => width ? (width+'% !important') : 'none'} ;
    cursor: pointer;
    border-radius: 40px 40px 40px 40px;
    &:hover {
        background-color: ${ ({color}) => color ? color: colors.pink };    
        opacity: 0.8;
        color: ${ colors.white };
        border-color: ${ ({color}) => color ? color: colors.pink };
    }
    &:focus {
        background-color: ${ ({color}) => color ? color: colors.pink };    
        opacity: 0.8;
        border-color: ${ ({color}) => color ? color: colors.pink };
        color: ${ colors.white } ;      
    }
    &:click {
        color: ${ ({color}) => color ? color: colors.pink };    
    }
`;
