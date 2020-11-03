import React from 'react'
import { HeaderUserMin } from '../../molecules'
import { SideBar, MenuComponent } from './styled'
import { UserOutlined, SettingOutlined, QuestionOutlined} from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { route } from '../../../routes'

export const SideBarMenu = ({ visible, onClose, name, email, image}) => {
    const history = useHistory()

    const changeRoute = (path) => {
        history.push(path)
        onClose()
    }

    return <SideBar
            width={600}
            placement="right"
            closable={false}
            visible={ visible }
            onClose={ onClose }
        >
            <HeaderUserMin 
                name={name} 
                email={email} 
                image={image} 
            />
            <MenuComponent mode="vertical">
                <MenuComponent.Item 
                    icon={ <UserOutlined/> }
                    onClick={() => changeRoute(route.userProfile)}
                    >
                    Conta
                </MenuComponent.Item>
                <MenuComponent.Item 
                    icon={ <SettingOutlined /> }
                    onClick={() => changeRoute(route.configuration)}>
                    Configurações
                </MenuComponent.Item>
                <MenuComponent.Item 
                    icon={ <QuestionOutlined /> }
                    onClick={() => changeRoute(route.help)}>
                    Ajuda
                </MenuComponent.Item>
            </MenuComponent>
        </SideBar>
    ;
};

export default SideBarMenu;