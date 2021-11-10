import React from 'react'
import Icons from '../Icons'
import { NoResultWrapper, NoResultTitle, NoResultText } from './style'

function NoResultPlaceholder() {
  return (
    <NoResultWrapper>
      <div>
        <Icons.NoResultIcon />
      </div>
      <div>
        <NoResultTitle>Oops!</NoResultTitle>
        <NoResultText>很抱歉，找不到符合此搜尋相關的內容。</NoResultText>
      </div>
    </NoResultWrapper>
  )
}

export default NoResultPlaceholder