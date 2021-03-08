import styled from 'styled-components'

import { colors } from '../../styles/colors'

export const Container = styled.div`
    background-image: linear-gradient(120deg, ${colors.black}, ${colors.darkMagenta});
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1vw;
    justify-content: flex-end;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    padding: 1vw;
    align-items: center;
`;

export const HeaderBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    padding: 5vw 10vw;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Plans = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    padding: 5vw;
    background-color: ${ colors.white };
`;

export const Time = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    padding: 5vw;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    padding: 5vw;
    background-color: ${ colors.white };

`;