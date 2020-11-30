import styled from 'styled-components'
import { Menu } from 'antd'
import { colors } from '../../../styles/colors';
import { Drawer } from 'antd';

export const SideBar = styled(Drawer)`
    .ant-drawer-body {
        padding: 0px !important;
    }
`;

export const MenuComponent = styled(Menu).attrs(style => {})`
    border-bottom: none;
    .ant-menu-item{
        font-size: 1.2em;
        &:hover {
            color: ${ colors.pink } !important;
            border-bottom: none !important;
        }
    }
    .ant-menu-item-selected {
        color: ${ colors.black } !important;
        border-bottom: none !important;
        background: ${ colors.white } !important;
    }
`;

