import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import 'antd/dist/antd.css';

import { Button } from 'antd';

export const ButtonAtom = styled(Button)`
    color: ${ ({color}) => color? color : colors.pink };
    background-color: ${ ({backgroundColor}) => backgroundColor ? backgroundColor : '' };
    &:hover {
        color: ${ ({color}) => color? color : colors.pink };
    }
    &:focus {
        color: ${ ({color}) => color? color : colors.pink } ;      
    }
    &:click {
        color: ${ ({color}) => color? color : colors.pink };    
    }
`;
