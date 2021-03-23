/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { HeaderUser } from '../../components/molecules';
import { AboutCard, ProjectCard } from '../../components/templates';
import { Header, Content } from './styled';
import { labService, teacherService } from '../../services/index';
import User from '../../user';


const TeacherProfile = () => {
    const [editAboutCard, setEditAboutCard] = useState(false);
    const [editProjectsCard, setEditProjectsCard] = useState(false);
    const [user, setUser] = useState({
        _id: '',
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

        labService.getLab(User.user?.labId).then((response) => {
            setUser(User.user);
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

    const onChangeEditAboutCard = () =>
        setEditAboutCard(!editAboutCard);

    const onChangeProjectsAboutCard = () => {
        setEditProjectsCard(!editProjectsCard);

    }
    const onChangeTeacherProjects = (projects, save) => {
        if (save) {
            setUser({ ...user, managements: projects })

            teacherService.update(user._id, { managements: projects });
        }

        setEditProjectsCard(false);

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
                onChangeTeacherProjects={onChangeTeacherProjects}
            />
        </Content>
    </>;
}
export default TeacherProfile;