import React from 'react'
import { Title, Text } from '../../atoms'
import { Card } from 'antd';

export const AboutCard = ({ description }) => {
    return <Card>
        <Title level={3} color> Sobre </Title>
        <Text>{ description }</Text>
    </Card>
}

export default AboutCard