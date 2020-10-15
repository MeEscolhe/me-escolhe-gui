import React, { useState } from 'react';
import { TopBarMenu, SideBarMenu } from '../../organisms'

export const Menu = ({ user }) => {
    const [open, setOpen] = useState(false)
    return <>
        <TopBarMenu image={ user.image } onClick={() => setOpen(true)}/>
        <SideBarMenu
            visible={ open }
            onClose={() => setOpen(false)}
            name={ user.name } 
            email={ user.email } 
            image={ user.image }
        />

  </>;
}

export default Menu;