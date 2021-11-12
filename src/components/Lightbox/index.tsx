import { useEffect, useState } from 'react'
import { ScenicSpotTourismInfo } from '../../models/ScenicSpot'
import { HotelTourismInfo } from '../../models/Hotel'
import { RestaurantTourismInfo } from '../../models/Restaurant'
import { ActivityTourismInfo } from '../../models/Activity'
import imagePlaceholder from '../../assets/images/image-placeholder-lg.svg'
import Icons from '../Icons'
import {
  LightBoxWrapper,
  LightBoxContentWrapper,
  LightBoxContent,
  LightBoxImageWrapper,
  LightBoxImage,
  ImageController,
  ImageControlButton,
  LighboxTitle,
  LighboxDescription,
  LighboxDetailInfo,
  LighboxDetailInfoWrapper
} from './style'
import InfoSnippet from '../InfoSnippet'
import ScenicInfoSnippets from '../InfoSnippet/ScenicInfoSnippets'
import ActivityInfoSnippets from '../InfoSnippet/ActivityInfoSnippets'
import HotelInfoSnippets from '../InfoSnippet/HotelInfoSnippets'
import RestaurantInfoSnippets from '../InfoSnippet/RestaurantInfoSnippets'
import LocationLink from '../LocationLink'

export type Item = ScenicSpotTourismInfo | HotelTourismInfo | RestaurantTourismInfo | ActivityTourismInfo

const judgeTypeWithID = (item: Item, idPattern: string) => (
  item.ID.indexOf(idPattern) > -1
)

const formatPictures = (picture: Item['Picture']) => {
  const pictures = [picture.PictureUrl1]
  if (picture.PictureUrl2) pictures.push(picture.PictureUrl2)
  if (picture.PictureUrl3) pictures.push(picture.PictureUrl3)
  return pictures
}

function Lightbox({ onClose, item }: { onClose: () => void, item: Item }) {
  const [imageIndex, setImageIndex] = useState(0)
  const pictures = formatPictures(item.Picture)

  console.log(item)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return (
    <LightBoxWrapper>
      <LightBoxContentWrapper onClick={e => {
        e.stopPropagation()
        onClose()
      }}>
        <LightBoxContent onClick={e => {
          e.stopPropagation()
          console.log('LightBoxContent')
        }}>
          <LightBoxImageWrapper>
            <LightBoxImage src={pictures[imageIndex]} onError={e => {
              const target = e.target as HTMLImageElement
              target.src = imagePlaceholder
            }}/>
          </LightBoxImageWrapper>
          {pictures.length > 1 && <ImageController>
            <ImageControlButton>
              {imageIndex > 0 && <Icons.VectorLeft onClick={() => {
                setImageIndex(imageIndex - 1)
              }}/>}
            </ImageControlButton>
            <ImageControlButton>
              {imageIndex < (pictures.length - 1) && <Icons.VectorRight onClick={() => {
                setImageIndex(imageIndex + 1)
              }}/>}
            </ImageControlButton>
          </ImageController>}
          <LighboxTitle>{item.Name}</LighboxTitle>
          <LighboxDescription>{item.DescriptionDetail || item.Description}</LighboxDescription>
          <LighboxDetailInfoWrapper>
            {item.Phone && <LighboxDetailInfo>
              <InfoSnippet text={item.Phone}>
                <Icons.Telephone />
              </InfoSnippet>
            </LighboxDetailInfo>}
            {item.Address && <LighboxDetailInfo>
              <LocationLink location={item.Address} address={item.Address} />
            </LighboxDetailInfo>}
            {judgeTypeWithID(item, 'C1') && <ScenicInfoSnippets item={item} />}
            {judgeTypeWithID(item, 'C2') && <ActivityInfoSnippets item={item} />}
            {judgeTypeWithID(item, 'C4') && <HotelInfoSnippets item={item} />}
            {judgeTypeWithID(item, 'C3') && <RestaurantInfoSnippets item={item} />}
          </LighboxDetailInfoWrapper>
        </LightBoxContent>
      </LightBoxContentWrapper>
    </LightBoxWrapper>
  )
}

export default Lightbox;
