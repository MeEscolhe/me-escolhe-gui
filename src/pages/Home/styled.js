import styled from 'styled-components'

import { colors } from '../../styles/colors'

export const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid  ${ colors.ice };
    background: ${ colors.white }
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
