import React, { useState } from 'react'
import { List } from 'antd'
import { Selection } from '../../molecules'
import { Details } from '../../templates'
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
                        projectName={ item.projectName ? item.projectName : "Nome do Projeto"  } 
                        role={ item.role } 
                        description={ item.description } 
                        labName={ item.labName ? item.labName  : "Nome do lab"} 
                        colors={ color(item.role) }
                        onClick={() => noDetails ? history.push(route.projectProfile): openDetails(item)}
                    />
                </List.Item>
            )}
        />
        <Details
            projectName={ details.projectName ? details.projectName : "Nome do Projeto"} 
            role={ details.role } 
            description={ details.description } 
            colors={ color(details.role) }
            labName={ details.labName ? details.labName  : "Nome do lab"} 
            visible={ open }
            onOk={() => history.push(route.projectProfile)}
            onCancel={() => setOpen(false)}
        />
    </>;
};

export default Selections;
