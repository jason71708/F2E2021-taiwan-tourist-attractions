import { InfoSnippetWrapper, InfoSnippeIconWrapper, InfoSnippeText } from './style'

type InfoSnippetProps = {
  children: React.ReactNode,
  text: string
}

function InfoSnippet({ children, text } : InfoSnippetProps) {
  return (
    <InfoSnippetWrapper>
      <InfoSnippeIconWrapper>
        {children}
      </InfoSnippeIconWrapper>
      <InfoSnippeText>{text}</InfoSnippeText>
    </InfoSnippetWrapper>
  )
}

export default InfoSnippet