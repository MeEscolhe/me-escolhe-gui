import React from 'react'
import { Title, Text, InputTextArea } from '../../atoms'
import { Card, Pencil, ProjectCard, Close } from './styled';

export const ProjectsCard = ({
    projects,
    teacherProjects,
    editCard,
    onChangeEditCard
}) => {

    return <Card>
        <Pencil onClick={() => onChangeEditCard(!editCard)} />
        <Title level={3} color>Seus projetos</Title>
        {projects.filter((project) => teacherProjects.includes(project._id))
            .map((project) => (
                <ProjectCard>
                    <Text>{project.name}</Text>
                    <Text>{project.description}</Text>
                    {editCard && <Close />}
                </ProjectCard>
            ))}
    </Card>
}

export default ProjectsCard