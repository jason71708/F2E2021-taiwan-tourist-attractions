import React from 'react'
import ActivityCard from '../ActivityCard'
import { SectionActivityWrapper } from './style'

const activities = [
  {
    title: '合歡山國際暗空公園-星空清境跨年活動',
    location: '南投縣 仁愛鄉',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOWDibcwGuBU6DZwSbxbMI06gL1dpEM8wiA&usqp=CAU',
    description: '南投縣與各單位多年於合歡山舉辦清境高山跨年晚會活動，今年將活動主軸由傳統跨年晚會轉化成為台灣高山星空遊程之體驗活動，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題，在擁有東南的的在擁有東南的的在擁有東南的的在擁有東南的的'
  },
  {
    title: '合歡山國際暗空公園-星空清境跨年活動',
    location: '南投縣 仁愛鄉',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOWDibcwGuBU6DZwSbxbMI06gL1dpEM8wiA&usqp=CAU',
    description: '南投縣與各單位多年於合歡山舉辦清境高山跨年晚會活動，今年將活動主軸由傳統跨年晚會轉化成為台灣高山星空遊程之體驗活動，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題，在擁有東南的的在擁有東南的的在擁有東南的的在擁有東南的的'
  },
  {
    title: '合歡山國際暗空公園-星空清境跨年活動',
    location: '南投縣 仁愛鄉',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOWDibcwGuBU6DZwSbxbMI06gL1dpEM8wiA&usqp=CAU',
    description: '南投縣與各單位多年於合歡山舉辦清境高山跨年晚會活動，今年將活動主軸由傳統跨年晚會轉化成為台灣高山星空遊程之體驗活動，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題，在擁有東南的的在擁有東南的的在擁有東南的的在擁有東南的的，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題。，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題。，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題。'
  },
  {
    title: '合歡山國際暗空公園-星空清境跨年活動',
    location: '南投縣 仁愛鄉',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOWDibcwGuBU6DZwSbxbMI06gL1dpEM8wiA&usqp=CAU',
    description: '南投縣與各單位多年於合歡山舉辦清境高山跨年晚會活動，今年將活動主軸由傳統跨年晚會轉化成為台灣高山星空遊程之體驗活動，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題，在擁有東南的的在擁有東南的的在擁有東南的的在擁有東南的的，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題。'
  }
]

function SectionActivity() {
  return (
    <SectionActivityWrapper>
      {activities.map(activity => (
        <ActivityCard
          title={activity.title}
          location={activity.location}
          imageUrl={activity.imageUrl}
          description={activity.description}
        />
      ))}
    </SectionActivityWrapper>
  )
}

export default SectionActivity