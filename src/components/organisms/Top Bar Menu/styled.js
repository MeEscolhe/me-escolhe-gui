import styled from 'styled-components'
import { Menu, Avatar } from 'antd'
import { colors } from '../../../styles/colors';

export const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid  ${ colors.ice };
    background: ${ colors.white }
`;

export const MenuBar = styled.div`
    display: flex;
    flex-direction: row;
`;

export const MenuComponent = styled(Menu).attrs(style => {})`
    border-bottom: none;
    .ant-menu-item{
        font-size: 1.2em;
        &:hover {
            color: ${ colors.pink } !important;
            border-bottom: 2px solid ${ colors.pink } !important;
        }
        &:active {
            color: ${ colors.pink } !important;
            border-bottom: 2px solid ${ colors.pink } !important;
        }
    }
    .ant-menu-item-selected {
        color: ${ colors.pink } !important;
        border-bottom: 2px solid ${ colors.pink } !important;
    }
`;

export const Profile = styled(Avatar)``;



