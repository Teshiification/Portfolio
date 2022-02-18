
import styled from 'styled-components'

export const CarouselContainer = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;  
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  background: var(--color-bg-darkened);
  box-shadow: 0px 0px 1rem var(--color-bg-darkened);  
  border-radius: 20px;
  border-color: black;
  margin: 1rem;
  padding-left: 1rem;
  border-style: none;
`

export const CarouselItem = styled.div`
  height: 10rem;
  padding: 1rem;
  scroll-snap-align: center;
`

export const CarouselItemTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  line-height: 32px;
  letter-spacing: 0.02em;
  background: var(--color-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  padding-top: 1rem;
`

export const CarouselItemText = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
  color: var(--color-text);
  font-weight: 600;
  height: 6rem;
`
