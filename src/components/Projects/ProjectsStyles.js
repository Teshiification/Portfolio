import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  place-items: center;
  align-items: center;
  column-gap: 2rem;
  row-gap: 2rem;
  max-height: 75vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  padding-top: 1rem;
  background: var(--color-bg-darkened);
  box-shadow: 0px 0px 1rem var(--color-bg-darkened);  
  border-radius: 20px;
  margin: 1rem;
`

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`

//TITLE:

export const TitleContent = styled.p`
font-weight: 800;
  text-align: center;
  width: 100%;
  font-size: clamp(1.5rem,5vw,1rem);
`

export const CardInfo = styled.div`
  width: 100%;
  max-height: 1vh;
  text-align: center;
  color: var(--color-text);
`

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`

//Tags:

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: .5rem;
`

export const Tag = styled.li`
`

//Divider:

export const HrSmall = styled.hr`
  width: 4rem;
  height: .2rem;
  margin: 20px auto;
  border: none;
  background: var(--color-text);
`

export const HrBig = styled.hr`
  width: 90%;
  height: 3px;
  margin: 20px auto;
  border: none;
  background: var(--color-text);
`
