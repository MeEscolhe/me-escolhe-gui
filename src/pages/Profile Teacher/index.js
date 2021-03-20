import React, { useEffect, useState } from 'react';
import { HeaderUser } from '../../components/molecules';
import { AboutCard } from '../../components/templates';
import { Header, Content, ButtonContainer } from './styled';
import { Button } from '../../components/atoms';
import teacherService from '../../services/teacherService';
import User from '../../user';


const TeacherProfile = () => {
    const [editAboutCard, setEditAboutCard] = useState(false);
    const [activeSaveButton, setActiveSaveButton] = useState(false);
    const [user, setUser] = useState({
        description: null,
        name: null,
        email: null,
        image: ''
    });

    useEffect(() => {
        teacherService.getById(User.getID()).then(data => {
            setUser({
                description: data.description,
                name: data.name,
                email: data.email
            })
        });

    }, [])

    const onChangeDescription = (event) =>
        setUser({ ...user, description: event.target.value });

    const onChangeEditAboutCard = () => {
        setEditAboutCard(!editAboutCard);
        setActiveSaveButton(true);
    }


    return <>
        <Header>
            <HeaderUser user={user} teacher={true} />
        </Header>
        <Content>
            <AboutCard
                editAboutCard={editAboutCard}
                onChangeEditAboutCard={onChangeEditAboutCard}
                description={user.description}
                onChangeDescription={onChangeDescription}
            />

            {activeSaveButton &&
                <ButtonContainer>
                    <Button onClick={() => { }}>Salvar</Button>
                </ButtonContainer>
            }
        </Content>
    </>;
}
export default TeacherProfile;