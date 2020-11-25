import React, { useState } from 'react'
import { List } from 'antd'
import { Selection } from '../../molecules'
import { Details } from '../../templates'
import { color } from '../../../styles/colors'
import { useHistory } from 'react-router-dom'
import { route } from '../../../routes'

import user from '../../../user'

export const Selections = ({selections}) => {
    const [open, setOpen] = useState(false)
    const [details, setDetails] = useState({})
    const history = useHistory()

    const openDetails = (item) => {
        setOpen(true)
        setDetails(item)
    }

    const getSelectionPage = (selectionID) => {
        history.push(route.selectionProfile + `/${selectionID}`)
    }

    return <>
        <List
            itemLayout="horizontal"
            dataSource={selections}
            renderItem={item => (
                <List.Item> 
                    <Selection 
                        projectName={ item.project ? item.project.name : ""  } 
                        role={ item.role } 
                        description={ item.description } 
                        labName={ item.project ? item.project.lab.name : "" } 
                        colors={ color(item.role) }
                        onClick={() => user.isRecruiter() ? history.push(route.projectProfile): openDetails(item)}
                    />
                </List.Item>
            )}
        />
        <Details
            projectName={ details.project ? details.project.name : ""} 
            role={ details.role } 
            description={ details.description } 
            colors={ color(details.role) }
            labName={ details.project ? details.project.lab.name : "" } 
            visible={ open }
            onOk={ () => getSelectionPage(details._id)}
            onCancel={() => setOpen(false)}
        />
    </>;
};

export default Selections;
