import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Load, Container } from './styled';

export const Loading = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return <Container>
        <Load indicator={antIcon} />
    </Container>;
}

export default Loading;