import React from 'react'
import { Title, Text, InputTextArea } from '../../atoms'
import { Card, Pencil } from './styled';

export const AboutCard = ({
    title,
    description,
    onChangeDescription,
    editAboutCard,
    onChangeEditAboutCard
}) => {

    return <Card>
        <Pencil onClick={() => onChangeEditAboutCard(!editAboutCard)} />
        <Title level={3} color='black' >{title ? title : 'Sobre'}</Title>
        {editAboutCard ?
            <InputTextArea
                value={description}
                rows={5}
                placeholder="Descrição"
                onChange={onChangeDescription}
            /> :
            <Text>{description}</Text>
        }
    </Card>
}

export default AboutCard