import React, { Component } from 'react'
import { Title, Input, Button } from '../../components/atoms'
import { Selections } from '../../components/organisms'
import { CreateSelection } from '../../components/templates'
import { Header, Content, Search, Legend } from './styled'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'
import { Affix } from 'antd'
import { route } from '../../routes'

import selectionService from '../../services/selectionsService'
import user from '../../user'

class AllSelections extends Component {
    constructor(props) {
        super(props);
        this.selectionService = selectionService
        this.state = {
            selections: [],
            title: props.title,
            createSelections: false,
        }
    }

    componentDidMount() {
        user.isCandidate() ?
            this.selectionService.getOpenSelections().then(data => this.setState({ selections: data, title: this.props.title }))
        :
            this.selectionService.getSelectionByRecruter(user.getID()).then(data => this.setState({ selections: data, title: this.props.title }))

    }

    componentDidUpdate(prevProps) {
        if (this.props.title !== prevProps.title) {
            user.isCandidate() ?
                this.selectionService.getOpenSelections().then(data => this.setState({ selections: data, title: this.props.title }))
            :
                this.selectionService.getSelectionByRecruter(user.getID()).then(data => this.setState({ selections: data, title: this.props.title }))
        }
    }

    filterSelections = (event) => {
        const search = event.target.value
        if (search.toLowerCase() === "")
            this.setState({ selections: this.props.selections })
        else {
            const filter = this.state.selections.filter(
                ({ role, projectName }) =>
                    role.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    projectName.toLowerCase().indexOf(search.toLowerCase()) > -1
            )
            this.setState({ selections: filter })
        }
    }

    openCreateSelection = () => {
        this.setState({ createSelections: !this.state.createSelections })
    }

    render() {
        return <>
            <Header>
                <Title color='black' level={2}>{this.state.title}</Title>
                <Search>
                    <Input
                        bordered={false}
                        placeholder="search"
                        suffix={<SearchOutlined />}
                        onChange={this.filterSelections}
                    />
                </Search>
            </Header>
            <Content>
                <Selections selections={this.state.selections} />
                {
                    this.state.createSelections ?
                        <CreateSelection
                            visible={this.state.createSelections}
                            onOk={this.openCreateSelection}
                            onCancel={this.openCreateSelection}
                        /> : <></>
                }
            </Content>
            {
                user.isRecruiter() ?
                    <Affix offsetBottom={50}>
                        <Legend>
                            <Button
                                icon={<PlusOutlined />}
                                onClick={this.openCreateSelection} />
                        </Legend>
                    </Affix>
                    : <></>
            }
        </>;
    }

}

export default AllSelections;