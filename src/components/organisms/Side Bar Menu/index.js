import React from 'react'
import { HeaderUserMin } from '../../molecules'
import { SideBar, MenuComponent } from './styled'
import { UserOutlined, SettingOutlined, QuestionOutlined, UnorderedListOutlined } from '@ant-design/icons'

export const SideBarMenu = ({ visible, onClose, name, email, image}) => {
    return <SideBar
            width={600}
            placement="right"
            closable={false}
            visible={visible}
            onClose={onClose}
        >
            <HeaderUserMin 
                name={name} 
                email={email} 
                image={image} 
            />
            <MenuComponent mode="vertical">
                <MenuComponent.Item icon={ <UserOutlined/> }>
                    Conta
                </MenuComponent.Item>
                <MenuComponent.Item icon={ <UnorderedListOutlined /> }>
                    Minhas Seleções
                </MenuComponent.Item>
                <MenuComponent.Item icon={ <SettingOutlined /> }>
                    Configurações
                </MenuComponent.Item>
                <MenuComponent.Item icon={ <QuestionOutlined /> }>
                    Ajuda
                </MenuComponent.Item>
            </MenuComponent>
        </SideBar>
    ;
};

export default SideBarMenu;