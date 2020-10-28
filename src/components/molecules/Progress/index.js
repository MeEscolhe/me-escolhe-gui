import React from 'react'
import { Title } from '../../atoms'
import { ProgressComponent, Graph } from './styled'

export const Progress = ({ color, percent, phase, status}) => {
    const Message = () => {
        if(status === "success") {
            return "Passou"
        } else if(status === "exception") {
            return "Não passou"
        } else if(status === "active") {
            return "Em andamento"
        }
        return "Não Iniciada"
    }

    const message = Message()

    return <ProgressComponent>
        <Graph 
            type="circle"
            strokeColor={{
                '0%': color.init,
                '100%': color.final,
            }}
            width={ 200 }
            percent={ percent }
            format={() => <>
                    <Title color level={2}>{ "Fase " + phase }</Title>
                    <Title color level={5}>{ message }</Title>
                </> 
            }
            status={ status }/>
    </ProgressComponent>
}

export default Progress;