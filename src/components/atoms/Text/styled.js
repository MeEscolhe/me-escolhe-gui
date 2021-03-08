import styled from 'styled-components';
import { Typography } from 'antd';

import { colors } from '../../../styles/colors'

const { Paragraph } = Typography;

export const TextAtom = styled(Paragraph)`
    color: ${({color}) => color ? color : colors.black } !important;
`;