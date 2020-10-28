import React from 'react'
import { Title, Input } from '../../components/atoms'
import { Selections } from '../../components/organisms'
import { Menu } from '../../components/templates'
import { Affix } from 'antd';
import { Header, Content, Search } from './styled'
import { SearchOutlined } from '@ant-design/icons';

class SelectionsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            selections: props.selections,
            user: {
                name: "Sheilla da Silva",
                email: "sheilla.silva@teste.com",
                image:"https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.0-9/107065226_3160359924018706_6230635106728147226_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=s2dirxK1HDgAX_4KAdA&_nc_ht=scontent.fjdo10-2.fna&oh=82c1a4b907bdd6c641671bab8ffb106e&oe=5FABD24E"
            }
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
        <Affix offsetTop={0}>
            <Menu user={ this.state.user }/>
        </Affix>
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
            <Selections data={ this.state.selections }/>
        </Content>
    </>;
    }

}

export default SelectionsPage;