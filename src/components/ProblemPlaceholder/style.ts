import styled from 'styled-components'

export const ProblemWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const ProblemTitle = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 20px;
  margin: 0 0 4px 8px;
`

export const ProblemText = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: 18px;
  margin: 0 0 0 8px;
`

export const ActionWrapper = styled.div`
  width: 100%;
  margin-top: 12px;
  text-align: center;
`

export const ActionButton = styled.button`
  padding: 4px 12px;
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
  background-color: #fff;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 6px;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: #fff
  }
`