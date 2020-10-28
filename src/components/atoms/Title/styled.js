import styled from 'styled-components'
import { Typography } from 'antd'
import { colors } from '../../../styles/colors'

const { Title } = Typography;

export const TitleAtom = styled(Title)`
    color: ${({color}) => color ? color : colors.white } !important;
`;