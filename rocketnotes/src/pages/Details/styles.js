import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto; // Terá 2 áreas: o Menu e o conteúdo
    grid-template-areas: 
    "header"
    "content";
`;

