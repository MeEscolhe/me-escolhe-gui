import React, { Component } from 'react'
import { Title, Input } from '../../components/atoms'
import { Selections } from '../../components/organisms'
import { Header, Content, Search } from './styled'
import { SearchOutlined } from '@ant-design/icons'

import SelectionService from '../../services/selectionsService'

class AllSelections extends Component {
    constructor(props) {
        super(props);
        this.selectionService = new SelectionService()
        this.state = {selections: []}
    }

    componentDidMount() {
        const data = [
            {
                projectName: "Me Escolhe",
                role: "Default",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
                labName:"UFCG",
            },
            {
                projectName: "Me Escolhe",
                role: "FullStack",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
                labName:"UFCG",
            },
            {
                projectName: "Me Escolhe",
                role: "Back-End",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
                labName:"UFCG",
            },
            {
                projectName: "Me Escolhe",
                role: "Front-End",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
                labName:"UFCG",
            },
            {
                projectName: "Me Escolhe",
                role: "Tester",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
                labName:"UFCG",
            },
        ]
        //let selections = this.selectionService.getAll()
        this.setState({selections: data})
    }

    filterSelections = (event) => {
        const search = event.target.value
        if(search.toLowerCase() === "") 
            this.setState({selections: this.props.selections})
        else {
            const filter = this.state.selections.filter(
                ( {job, projectName} ) => 
                job.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                projectName.toLowerCase().indexOf(search.toLowerCase()) > -1
            ) 
            this.setState({selections: filter})
        }        
    }

    render() {
        return <>
        <Header>
            <Title color level={2}> Seleções </Title>
            <Search>
            <Input 
                bordered={false}
                placeholder="search" 
                suffix={<SearchOutlined />}
                onChange={ this.filterSelections }
            />
            </Search>
        </Header>
        <Content>
            <Selections data={ this.state.selections }/>
        </Content>
    </>;
    }

}

export default AllSelections;