import React from 'react'
import { 
    CardMolecule,
    TitleComponent, 
    Description, 
    LabNameComponent, 
    Header, 
    DataHeader, 
    Legend } from './styled'
import { Avatar } from '../../atoms'
import { color } from '../../../styles/colors';

export const Selection = ({labName, projectName, role, description, onClick, ...props}) => {
    const colors = color(role)

    return <CardMolecule
            hoverable
            primary={ colors.primary }
            secundary={ colors.secundary }
            onClick={ onClick }
            {...props}
        >
            <Header>
                <Avatar color={ colors.icon }/>
                <DataHeader>
                    <TitleComponent 
                        level={3}>{ projectName }
                    </TitleComponent>
                    <TitleComponent 
                        level={5}>{ role }
                    </TitleComponent>
                </DataHeader>            
            </Header>
            <Description 
                ellipsis={{ rows: 1, expandable: true, symbol: ' ' }}> 
                { description }
            </Description>
            <Legend>
                <LabNameComponent>{ labName }</LabNameComponent> 
            </Legend>
        </CardMolecule>;
};

export default Selection;
