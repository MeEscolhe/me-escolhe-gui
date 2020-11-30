import React, { useState, useEffect } from 'react';
import candidateService from '../../../services/candidateService';
import teacherService from '../../../services/teacherService';
import user from '../../../user';
import { TopBarMenu, SideBarMenu } from '../../organisms'

export const Menu = () => {
    const [myUser, setMyUser] = useState() 
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if(user.isCandidate())
            candidateService.getCandidate(user.getID()).then(data => setMyUser(data))
        else {
            if(user.isRecruiter()) 
                teacherService.getById(user.getID()).then(data => setMyUser(data)) 
        }
    })

    return <>
        <TopBarMenu image={ myUser ? myUser.image : '' } onClick={() => setOpen(true)}/>
        <SideBarMenu
            visible={ open }
            onClose={() => setOpen(false)}
            name={ myUser ? myUser.name : ''} 
            email={ myUser ? myUser.email : '' } 
            image={ myUser ? myUser.image : ''}
        />

  </>;
}

export default Menu;