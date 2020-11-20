import React, { Component } from 'react'
import { Title, Input } from '../../components/atoms'
import { Selections } from '../../components/organisms'
import { Header, Content, Search } from './styled'
import { SearchOutlined } from '@ant-design/icons'

import selectionService from '../../services/selectionsService'

class AllSelections extends Component {
    constructor(props) {
        super(props);
        this.selectionService = selectionService
        this.state = {
            selections: []
        }
    }

    componentDidMount() {
        this.selectionService.getOpenSelections().then(data => 
            this.setState({selections: data})
        )
    }

    filterSelections = (event) => {
        const search = event.target.value
        if(search.toLowerCase() === "") 
            this.setState({selections: this.props.selections})
        else {
            const filter = this.state.selections.filter(
                ( {role, projectName} ) => 
                role.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
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
            <Selections selections={ this.state.selections }/>
        </Content>
    </>;
    }

}

export default AllSelections;