import styled from 'styled-components'
import { Spin } from 'antd'
import { colors } from '../../../styles/colors';

export const Load = styled(Spin)`
    color: ${ colors.pink };
`;
export const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  animation-duration: 2s;
  animation-name: fadeIn;
`;