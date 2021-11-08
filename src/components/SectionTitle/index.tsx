import React from 'react'
import { Title, TitleIconWrapper } from './styled'
import { Shapes } from '../../constants'
import { ReactComponent as SquareIcon } from '../../assets/image/square.svg'
import { ReactComponent as TriangleIcon } from '../../assets/image/triangle.svg'

type SectionTitleProps = {
  title: string
  type: Shapes
}

const currentShapeIcon = (type: Shapes) => {
  switch (type) {
    case Shapes.Square:
      return (<SquareIcon />)
    case Shapes.Triangle:
      return (<TriangleIcon />)
    default:
      return (<SquareIcon />)
  }
}

function SectionTitle({ title, type }: SectionTitleProps) {
  return (
    <Title>
      <TitleIconWrapper>
        {currentShapeIcon(type)}
      </TitleIconWrapper>
      {title}
    </Title>
  )
}

export default SectionTitle