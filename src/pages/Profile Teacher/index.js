/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { HeaderUser } from '../../components/molecules';
import { AboutCard, ProjectCard } from '../../components/templates';
import { Header, Content, ButtonContainer } from './styled';
import { Button } from '../../components/atoms';
import { labService } from '../../services/index';
import User from '../../user';


const TeacherProfile = () => {
    const [editAboutCard, setEditAboutCard] = useState(false);
    const [editProjectsCard, setEditProjectsCard] = useState(false);
    const [activeSaveButton, setActiveSaveButton] = useState(false);
    const [user, setUser] = useState({
        description: null,
        name: null,
        email: null,
        image: '',
        labId: "",
        managements: []
    });
    const [lab, setLab] = useState({
        id: '',
        name: '',
        description: '',
        projects: []
    });
    useEffect(() => {

        labService.getLab(User.user.labId).then((response) => {
            setUser(User.user);
            console.log(response);
            setLab({
                id: response.id,
                name: response.name,
                description: response.description,
                projects: response.projects
            })
        });
    }, [])

    const onChangeDescription = (event) =>
        setUser({ ...user, description: event.target.value });

    const onChangeEditAboutCard = () => {
        setEditAboutCard(!editAboutCard);
        setActiveSaveButton(true);
    }
    const onChangeProjectsAboutCard = () => {
        setEditProjectsCard(!editProjectsCard);
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
            <ProjectCard
                editCard={editProjectsCard}
                onChangeEditCard={onChangeProjectsAboutCard}
                projects={lab.projects}
                teacherProjects={user.managements}
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