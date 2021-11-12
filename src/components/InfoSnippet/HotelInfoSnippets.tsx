import { HotelTourismInfo } from '../../models/Hotel'
import { LighboxDetailInfo } from '../Lightbox/style'
import InfoSnippet from '.'
import Icons from '../Icons'

function HotelInfoSnippets({ item }: { item: HotelTourismInfo }) {
  return (
    <>
      {item.Spec && <LighboxDetailInfo>
        <InfoSnippet text={item.Spec}>
          <Icons.Ticket />
        </InfoSnippet>
      </LighboxDetailInfo>}
      {(item.Grade) && <LighboxDetailInfo>
        <InfoSnippet text={item.Grade}>
          <Icons.Square />
        </InfoSnippet>
      </LighboxDetailInfo>}
      {(item.Class) && <LighboxDetailInfo>
        <InfoSnippet text={item.Class}>
          <Icons.Square />
        </InfoSnippet>
      </LighboxDetailInfo>}
      {(item.Spec) && <LighboxDetailInfo>
        <InfoSnippet text={item.Spec}>
          <Icons.Square />
        </InfoSnippet>
      </LighboxDetailInfo>}
      {(item.ServiceInfo) && <LighboxDetailInfo>
        <InfoSnippet text={item.ServiceInfo}>
          <Icons.Square />
        </InfoSnippet>
      </LighboxDetailInfo>}
    </>
  )
}

export default HotelInfoSnippets