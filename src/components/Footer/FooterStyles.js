import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 1vw;
    margin: 1vw;
    background: var(--color-bg-darkened);
    height: auto;
    border-radius: 1rem;
`
export const ContainerItemLeft = styled.div`
    margin-left: 1vw; 
    margin-right: auto;
    margin-top: 1vh;
`

export const ContainerItemCenter = styled.div`
    margin: 1vw;
    margin-top: 1vh;
    text-align: center;
`

export const ContainerItemRight = styled.div`
    margin-left: auto; 
    margin-right: 1vw;
    margin-top: 1vh;
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
