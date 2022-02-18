import styled from 'styled-components';

export const Container = styled.div`
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    display: grid;
    column-gap: 5vw;
    row-gap: 5vh;
    width: 100%;
    margin: 1rem 0 2rem;
    align-items: center;

`

export const Item = styled.div`
    background: rgba(255,255,255,0.05);
    border-radius: 12px;
    padding: 1rem;
`

export const Text = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    color: gray;
    letter-spacing: 0.01em;
`

export const Number = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  margin-bottom: 1rem;
  color: white
`

export const Icon = styled.div`
    color: var(--color-text);
    display: block;
    width: 4rem;
    height: 4rem;
    margin-bottom: -1rem;
`
