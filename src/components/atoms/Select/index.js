import React from 'react';
import { SelectComponent,  OptionComponent } from './styled';

export const Select = ({ options, ...props}) => {
    const optionsComponents = options.map(option => {
        return <OptionComponent value={option}>{ option }</OptionComponent>
        }
    )
    
    return <SelectComponent {...props}>
        { optionsComponents }
    </SelectComponent>
}

export default Select;
