import { RestaurantTourismInfo } from '../../models/Restaurant'
import { LighboxDetailInfo } from '../Lightbox/style'
import InfoSnippet from '.'
import Icons from '../Icons'

function RestaurantInfoSnippets({ item }: { item: RestaurantTourismInfo }) {
  return (
    <>
      {item.OpenTime && <LighboxDetailInfo>
        <InfoSnippet text={item.OpenTime}>
          <Icons.Clock />
        </InfoSnippet>
      </LighboxDetailInfo>}
      {(item.Class) && <LighboxDetailInfo>
        <InfoSnippet text={item.Class}>
          <Icons.Square />
        </InfoSnippet>
      </LighboxDetailInfo>}
    </>
  )
}

export default RestaurantInfoSnippets