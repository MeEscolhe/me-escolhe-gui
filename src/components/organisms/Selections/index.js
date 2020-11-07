import React, { useState } from 'react'
import { List } from 'antd'
import { Selection, Details } from '../../molecules'
import { color } from '../../../styles/colors'
import { useHistory } from 'react-router-dom'
import { route } from '../../../routes'

export const Selections = ({noDetails, data}) => {
    const [open, setOpen] = useState(false)
    const [details, setDetails] = useState({})
    const history = useHistory()

    const openDetails = (item) => {
        setOpen(true)
        setDetails(item)
    }

    return <>
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Selection 
                        projectName={ item.projectName } 
                        job={ item.job } 
                        description={ item.description } 
                        labName={ item.labName } 
                        colors={ color(item.job) }
                        onClick={() => noDetails ? history.push(route.projectProfile): openDetails(item)}
                    />
                </List.Item>
            )}
        />
        <Details
            projectName={ details.projectName } 
            job={ details.job } 
            description={ details.description } 
            colors={ color(details.job) }
            labName={ details.labName } 
            visible={ open }
            onOk={() => history.push(route.projectProfile)}
            onCancel={() => setOpen(false)}
        />
    </>;
};

export default Selections;
