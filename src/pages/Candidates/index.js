import React from 'react'
import { Title } from '../../components/atoms'
import { HeaderProject } from '../../components/molecules'
import { CardMolecule, Header, Content, Name, Email } from './styled'
import { List } from 'antd'

export const Candidates = ({ project, candidates }) => { 
    return <Content> 
        <HeaderProject project={ project }/>
        <Header>
            <Title color level={3}> Candidatos </Title>
        </Header>
        <List
            itemLayout="horizontal"
            dataSource={ candidates }
            renderItem={candidate => (
                <List.Item> 
                    <CardMolecule
                        hoverable
                    >
                        <Name color level={5}>{ candidate.name }</Name>
                        <Email>{ candidate.email }</Email> 
                    </CardMolecule>
                </List.Item>
            )}
        />        
    </Content>;
}
export default Candidates;