import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Title } from '../../atoms'
import { Modal } from 'antd';
import { colors } from '../../../styles/colors'

export const ModalMolecule = styled(Modal).attrs(style => {})`
    .ant-modal-header {
        background-image: linear-gradient(240deg, ${ ({primary}) => primary }, ${ ({secundary}) => secundary });
    }
    .dtnNMp {
        margin-bottom: 5%;
    }
    .ant-modal-close-x {
        color: ${ colors.ice };
    }
`;

export const TitleComponent = styled(Title)`
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
    margin-inline-start: 16px !important;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10%;
`;

export const DataHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16;
`;