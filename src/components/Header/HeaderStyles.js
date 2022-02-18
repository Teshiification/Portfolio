import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  margin: 2rem;
`

export const DivLeft = styled.div`
  grid-area: 1 / 1 / 2 / 5;
  display: flex;
  flex-direction: row;
  align-content: center;
`

export const DivCenter = styled.div`
  grid-area: 1 / 2 / 2 / 5;
  display: flex;
  justify-content: space-around;
  align-content: center;
`

export const DivRight = styled.div`
  grid-area: 1 / 6 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-content: center;
  z-index: 999;
`

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: var(--color-text);
  border-radius: 10px;
  padding: 1vw;
&:hover {
    background-color: var(--color-bg-highlight);
    transform: scale(1.2);
    cursor: pointer;
    overflow: visible;
  }
`

export const NavList = styled.ul`
  z-index: 999;
  justify-content: space-around;
  align-content: center;
  display: flex;
  grid-column-gap: 2rem;
`
