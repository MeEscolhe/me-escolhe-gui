import React, { useState } from 'react'
import { Title, Text, InputTextArea } from '../../atoms'
import { Card, Pencil } from './styled';

export const AboutCard = ({ title, description, onChangeDescription }) => {
    const [edit, setEdit] = useState(false);

    return <Card>
        <Pencil onClick={() => setEdit(!edit)} />
        <Title level={3} color>{title ? title : 'Sobre'}</Title>
        {edit ?
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