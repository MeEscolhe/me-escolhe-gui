import React from 'react'
import { HeaderUserMin } from '../../molecules'
import { SideBar, MenuComponent } from './styled'
import { UserOutlined, LogoutOutlined} from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { route } from '../../../routes'

import auth from '../../../auth'
import user from '../../../user'

export const SideBarMenu = ({ visible, onClose, name, email, image}) => {
    const history = useHistory()

    const changeRoute = (path) => {
        history.push(path)
        onClose()
    }

    const logoutPage = () => {
        auth.logout(() => {
            history.push(route.home)
        })
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
                {
                    user.isCandidate() ? 
                    <MenuComponent.Item 
                        icon={ <UserOutlined/> }
                        onClick={() => changeRoute(route.userProfile)}
                        >
                        Conta
                    </MenuComponent.Item>
                    : <></>
                }                
                <MenuComponent.Item 
                    icon={ <LogoutOutlined /> }
                    onClick={() => logoutPage() }>
                    Logout
                </MenuComponent.Item>
            </MenuComponent>
        </SideBar>
    ;
};

export default SideBarMenu;