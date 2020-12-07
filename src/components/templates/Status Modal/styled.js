import styled from 'styled-components'
import 'antd/dist/antd.css'

import { Modal, Avatar } from 'antd'
import { colors } from '../../../styles/colors';


export const ModalMolecule = styled(Modal)`
    .ant-modal-body {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
    }    
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
export const Legend = styled.div`
    margin-block-start: 10%;
    margin-block-end: 3%;
`
