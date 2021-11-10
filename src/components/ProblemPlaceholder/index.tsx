import React from 'react'
import Icons from '../Icons'
import { ProblemWrapper, ProblemTitle, ProblemText, ActionWrapper, ActionButton } from './style'
import { Link } from 'react-router-dom'

export enum Problems {
  NoResult = 'NoResult',
  PageNotFound = 'PageNotFound',
  Error = 'Error'
}

function ProblemPlaceholder({ problem }: { problem: Problems }) {
  return (
    <ProblemWrapper>
      <div>
        <Icons.ProblemIcon />
      </div>
      <div>
        <ProblemTitle>Oops!</ProblemTitle>
        <ProblemText>
          {problem === Problems.NoResult && '很抱歉，找不到符合此搜尋相關的內容。'}
          {problem === Problems.PageNotFound && '很抱歉，找不到該頁面。'}
          {problem === Problems.Error && '很抱歉，有些地方出問題了，請稍後再試。'}
        </ProblemText>
      </div>
      {problem === Problems.PageNotFound &&
        <ActionWrapper>
          <ActionButton>
            <Link to="/">返回首頁</Link>
          </ActionButton>
        </ActionWrapper>
      }
    </ProblemWrapper>
  )
}

export default ProblemPlaceholder