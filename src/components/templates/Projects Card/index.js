import React, { useEffect, useState } from 'react'
import { Title, Text, Button } from '../../atoms'
import { Card, Pencil, ProjectCard, Close, SelectProjects as Select, Legend, ButtonsContainer } from './styled';
import { PlusOutlined } from '@ant-design/icons';

export const ProjectsCard = ({
    projects,
    teacherProjects,
    editCard,
    onChangeEditCard,
    onChangeTeacherProjects
}) => {
    const [selectValue, setValue] = useState('');
    const [localTeacherProjects, setLocalTeacherProjects] = useState([]);
    const setProjectOption = (projectName) => {
        const filteredProject = projects.filter((project) => project.name === projectName)[0];
        setValue(filteredProject);
    }
    const addLocal = () => {
        let localProjects = localTeacherProjects;
        localProjects.push(selectValue._id);
        setLocalTeacherProjects(localProjects);
        setValue('');
    }
    useEffect(() => {
        setLocalTeacherProjects(teacherProjects);
    }, [editCard, teacherProjects])

    return <Card>
        <Pencil onClick={() => onChangeEditCard(!editCard)} />
        <Title level={3} color='black' >Seus projetos</Title>
        {editCard &&

            <Select
                value={selectValue.name}
                onChange={setProjectOption}
                options={
                    projects.filter((project) => !localTeacherProjects.includes(project._id))
                        .map((project) => project.name)
                }
                placeholder='Projetos'
            />

        }
        {projects.filter((project) => localTeacherProjects.includes(project._id))
            .map((project) => (
                <ProjectCard key={Math.random()}>
                    <Text>{project.name}</Text>
                    <Text>{project.description}</Text>
                    {editCard && <Close />}
                </ProjectCard>
            ))
        }
        {editCard &&
            <>
                <Legend>
                    <Button
                        onClick={addLocal}
                        icon={<PlusOutlined />} />
                </Legend>

                <ButtonsContainer>
                    <Button onClick={() => onChangeTeacherProjects(localTeacherProjects, true)}>Salvar</Button>
                    <Button onClick={() => onChangeTeacherProjects(localTeacherProjects, false)}>Cancelar</Button>
                </ButtonsContainer>
            </>}
    </Card>
}

export default ProjectsCard