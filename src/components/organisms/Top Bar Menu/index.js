import React from 'react'
import { colors } from '../../../styles/colors'
import { Avatar, ButtonLink } from '../../atoms'
import { TopBar, MenuComponent, MenuBar, Profile } from './styled'
import { UserOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { route } from '../../../routes'

export const TopBarMenu = ({ image, onClick }) => {
    const history = useHistory()

    return <>
        <TopBar>
            <MenuBar>
                <Avatar size={54} color={ colors.pink }/>            
                <MenuComponent mode="horizontal">
                    <MenuComponent.Item onClick={() => history.push(route.selections)}>
                        Seleções
                    </MenuComponent.Item>
                    <MenuComponent.Item onClick={() => history.push(route.userSelections)}>
                        Minhas Seleções
                    </MenuComponent.Item>
                </MenuComponent>
            </MenuBar>
            <ButtonLink onClick={onClick}>
                <Profile src={ image } size={44} icon={ <UserOutlined />}/>                   
            </ButtonLink>
        </TopBar>
    </>
    
};

export default TopBarMenu