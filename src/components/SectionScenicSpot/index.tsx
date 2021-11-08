import React from 'react'
import Card from '../Card'
import { SectionScenicSpotWrapper } from './style'

const scenicSpots = [
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    imageUrl: 'https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2020/04/30/dd90f2f758f7460e9ee53dd5d2e19470_%E6%9D%AD%E5%B7%9E%E5%B0%8F%E7%B1%A0%E6%B9%AF%E5%8C%85+%E7%B1%B3%E5%85%B6%E6%9E%97.jpg'
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    imageUrl: 'https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2020/04/30/dd90f2f758f7460e9ee53dd5d2e19470_%E6%9D%AD%E5%B7%9E%E5%B0%8F%E7%B1%A0%E6%B9%AF%E5%8C%85+%E7%B1%B3%E5%85%B6%E6%9E%97.jpg'
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    imageUrl: 'https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2020/04/30/dd90f2f758f7460e9ee53dd5d2e19470_%E6%9D%AD%E5%B7%9E%E5%B0%8F%E7%B1%A0%E6%B9%AF%E5%8C%85+%E7%B1%B3%E5%85%B6%E6%9E%97.jpg'
  },
  {
    title: '正濱漁港懷舊碼頭',
    location: '基隆市 中正區',
    imageUrl: 'https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2020/04/30/dd90f2f758f7460e9ee53dd5d2e19470_%E6%9D%AD%E5%B7%9E%E5%B0%8F%E7%B1%A0%E6%B9%AF%E5%8C%85+%E7%B1%B3%E5%85%B6%E6%9E%97.jpg'
  }
]

function SectionScenicSpot() {
  return (
    <SectionScenicSpotWrapper>
      {scenicSpots.map(scenicSpot => (
        <Card
          title={scenicSpot.title}
          location={scenicSpot.location}
          imageUrl={scenicSpot.imageUrl}
        />
      ))}
    </SectionScenicSpotWrapper>
  )
}

export default SectionScenicSpot