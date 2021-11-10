import React from 'react'
import { Title, TitleIconWrapper } from './styled'
import { Shapes } from '../../constants'
import Icons from '../Icons'

type SectionTitleProps = {
  title: string
  type: Shapes
}

const currentShapeIcon = (type: Shapes) => {
  switch (type) {
    case Shapes.Square:
      return (<Icons.SquareIcon />)
    case Shapes.Triangle:
      return (<Icons.Triangle />)
    default:
      return (<Icons.SquareIcon />)
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