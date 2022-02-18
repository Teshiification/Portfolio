import styled from 'styled-components';

export const GradientText = styled.div`
  background: var(--color-gradient);
  background-clip: text;
  -webkit-background-clop: text;
  -webkit-text-fill-color: transparent;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem 2rem;
  margin: 0 auto;
  max-width: 70rem;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1 1fr;
  z-index: 10;
`

export const H1 = styled.h1`
  font-size: clamp(1rem, 8vh, 10vw);
  text-align: center;
  background: var(--color-gradient);
  background-clip: text;
  -webkit-background-clop: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 900px){
    font-size: clamp(1rem, 10vh, 10vw);
  }
`

export const H2 = styled.h2`
  font-size: clamp(1rem, 2vh, 5vw);
  text-align: center;
  background: var(--color-gradient);
  background-clip: text;
  -webkit-background-clop: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 900px){
    font-size: clamp(1rem, 3vh, 2vw);
  }
`

export const H5 = styled.h5`
  font-size: clamp(1rem, 1rem, 5rem);
  text-align: center;
  background: var(--color-gradient);
  background-clip: text;
  -webkit-background-clop: text;
  -webkit-text-fill-color: transparent;
`

export const A5 = styled.a`
@media only screen and (max-width: 900px){
  display: none;
}
@media only screen and (min-width: 900px){
  font-weight: 600;
  font-size: clamp(1rem, 2rem, 5rem);
  text-align: center;
  -webkit-background-clop: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  &:hover{
    background: var(--color-text-highlight);
    background-clip: text;
    text-shadow: 0px 0px 15px var(--color-text-highlight);
    overflow: shown;
  }
  &:active{   
    background: var(--color-text-highlight);
    background-clip: text;
    text-shadow: 0px 0px 15px var(--color-text-highlight);
    overflow: shown;
  }
}
`

export const Button = styled.a`
  text-decoration: none;
  color: white;
  background: var(--color-button-background);
  padding: 1rem 2rem;
  border-radius: 10px;
  transition: 0.2s;
  &:hover{
    box-shadow: 0px 0px 10px var(--color-text-highlight);
    cursor: pointer;
  }
  &:hover:active{
    box-shadow: 0px 0px 10px var(--color-text-highlight);
    cursor: pointer;
  }
`

export const BlogCard = styled.div`
  background: white;
  font-size: clamp(1rem, 2vw, 1rem);
  font-weight: 600;
  color: var(--color-text);
  box-shadow: 0px 0px 15px var(--color-bg-highlight);
  border-radius: 10px;
  text-align: center;
  width: 22rem;
  padding: 0rem;
  scroll-snap-align: center;
  &:hover{overflow: shown; box-shadow: 0px 0px 15px var(--color-text-highlight);}
  &:active{box-shadow: 0px 0px 15px var(--color-text-highlight);}
`
