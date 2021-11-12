import { HotelTourismInfo } from '../../models/Hotel'
import { LighboxDetailInfo } from '../Lightbox/style'
import InfoSnippet from '.'
import Icons from '../Icons'

function HotelInfoSnippets({ item }: { item: HotelTourismInfo }) {
  return (
    <>
      <LighboxDetailInfo>
        {item.Spec && <InfoSnippet text={item.Spec}>
          <Icons.Ticket />
        </InfoSnippet>}
      </LighboxDetailInfo>
      <LighboxDetailInfo>
        {(item.Grade) && <InfoSnippet text={item.Grade}>
          <Icons.Square />
        </InfoSnippet>}
      </LighboxDetailInfo>
      <LighboxDetailInfo>
        {(item.Class) && <InfoSnippet text={item.Class}>
          <Icons.Square />
        </InfoSnippet>}
      </LighboxDetailInfo>
      <LighboxDetailInfo>
        {(item.Spec) && <InfoSnippet text={item.Spec}>
          <Icons.Square />
        </InfoSnippet>}
      </LighboxDetailInfo>
      <LighboxDetailInfo>
        {(item.ServiceInfo) && <InfoSnippet text={item.ServiceInfo}>
          <Icons.Square />
        </InfoSnippet>}
      </LighboxDetailInfo>
    </>
  )
}

export default HotelInfoSnippets