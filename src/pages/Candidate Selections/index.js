import React from 'react'
import { Title, Input } from '../../components/atoms'
import { Selections } from '../../components/organisms'
import { Header, Content, Search } from './styled'
import { SearchOutlined } from '@ant-design/icons'

class CandidateSelections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            selections: props.selections,
        }
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
            <Title color level={2}>{ this.state.title }</Title>
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
            <Selections noDetails data={ this.state.selections }/>
        </Content>
    </>;
    }

}

export default CandidateSelections;