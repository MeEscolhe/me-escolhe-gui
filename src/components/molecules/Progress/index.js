import React from 'react'
import { Title } from '../../atoms'
import { ProgressComponent, Graph } from './styled'
import { statusPhase } from '../../../styles/colors'

export const Progress = ({ phase, status }) => {
    const color = statusPhase(status)
    
    const message = () => {
        if(status === 'success') return 'Classificado'
        else if(status === 'exception') return 'Desclassificado'
        else if(status === 'active') return 'Em andamento'
        return 'Não Iniciada'
    }

    return <ProgressComponent>
        <Graph 
            type="circle"
            strokeColor={{
                '0%': color.init,
                '100%': color.final,
            }}
            width={ 200 }
            percent={ 100 }
            format={() => <>
                    <Title color level={2}>{ "Fase " + phase }</Title>
                    <Title color level={5}>{ message() }</Title>
                </> 
            }
            status={ status }/>
    </ProgressComponent>
}

export default Progress;