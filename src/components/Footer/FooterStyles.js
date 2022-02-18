import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;
    margin: 2rem;
    background: var(--color-bg-darkened);
    height: 20vh;
    border-radius: 2rem;
`

export const ContainerItem = styled.div`
    margin: 1rem;
`

export const P = styled.p`
    font-weight: 600;
    color: var(--color-text);
`

export const A = styled.a`
    font-weight: 600;
    color: var(--color-text);
    text-decoration: none;
    cursor: pointer;
    line-height: 32px;
`

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: var(--color-text);
  border-radius: 10px;
  padding: 1rem;
&:hover {
    background-color: var(--color-bg-highlight);
    transform: scale(1);
    cursor: pointer;
    overflow: visible;
  }
`
