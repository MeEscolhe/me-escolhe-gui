import React, { useState } from 'react';
import { TopBarMenu, SideBarMenu } from '../../organisms'

export const Menu = ({ user }) => {
    const [open, setOpen] = useState(false)
    return <>
        <TopBarMenu image={ user ? user.image : '' } onClick={() => setOpen(true)}/>
        <SideBarMenu
            visible={ open }
            onClose={() => setOpen(false)}
            name={ user ? user.name : ''} 
            email={ user ? user.email : '' } 
            image={ user ? user.image : ''}
        />

  </>;
}

export default Menu;