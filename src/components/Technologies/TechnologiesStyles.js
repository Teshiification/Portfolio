import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  place-items: center;
  column-gap: 2vw;
  row-gap: 2vh;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;
`

export const ListItem = styled.li`
  max-width: 15rem;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 20px var(--color-bg-highlight);
  border-radius: 10px;
  padding: 1rem;
  &:hover{
    box-shadow: 3px 3px 20px var(--color-text);
  }
`

export const ListIcon = styled.div`
  display: block;
  width: 4rem;
  height: 4rem;
  margin-bottom: -1rem;
`

export const TagList = styled.ul`
  color: var(--color-text);
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
`

export const Tag = styled.li`
`
