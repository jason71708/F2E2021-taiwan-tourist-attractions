import styled from 'styled-components'

export const NoResultWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoResultTitle = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 20px;
  margin: 0 0 4px 8px;
`

export const NoResultText = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: 18px;
  margin: 0 0 0 8px;
`