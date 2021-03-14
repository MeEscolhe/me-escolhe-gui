import React, { useEffect, useState } from 'react'
import { Title } from '../../components/atoms'
import { HeaderProject } from '../../components/molecules'
import { CardMolecule, Header, Content, Name, Email } from './styled'
import { Tabs, List } from 'antd'

import user from '../../user'
import teacherService from '../../services/teacherService'

export const Candidates = () => {
    const [selections, setSelections] = useState()
    const [project] = useState()

    const { TabPane } = Tabs

    useEffect(() => {
        const selecionsRecruiter = teacherService.getSelections(user.getID())
        const selecionsFilter = selecionsRecruiter.filter(({phases}) => {
            return phases.lenth > 0
        })
        setSelections(selecionsFilter)
    }, [])

    const candidates = () => {
        selections.map(selection => (
            <TabPane key={Math.random()} tab={selection.phases[0]} >
              { selections.name }
            </TabPane>
          ))
    }

    return <Content> 
        <HeaderProject project={ project }/>
        <Header>
            <Title color='black' level={3}> Candidatos </Title>
        </Header>
        <Tabs defaultActiveKey="1" tabPosition={"left"} style={{ height: 220 }}>
          { Candidates }
        </Tabs>
        <List
            itemLayout="horizontal"
            dataSource={ candidates }
            renderItem={candidate => (
                <List.Item> 
                    <CardMolecule
                        hoverable
                    >
                        <Name color='black' level={5}>{ candidate.name }</Name>
                        <Email>{ candidate.email }</Email> 
                    </CardMolecule>
                </List.Item>
            )}
        />        
    </Content>;
}
export default Candidates;