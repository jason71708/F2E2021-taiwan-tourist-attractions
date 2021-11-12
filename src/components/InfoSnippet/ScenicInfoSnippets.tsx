import { ScenicSpotTourismInfo } from '../../models/ScenicSpot'
import { LighboxDetailInfo } from '../Lightbox/style'
import InfoSnippet from '.'
import Icons from '../Icons'

function ScenicInfoSnippets({ item }: { item: ScenicSpotTourismInfo }) {
  return (
    <>
      <LighboxDetailInfo>
        {item.TicketInfo && <InfoSnippet text={item.TicketInfo}>
          <Icons.Ticket />
        </InfoSnippet>}
      </LighboxDetailInfo>
      <LighboxDetailInfo>
        {item.OpenTime && <InfoSnippet text={item.OpenTime}>
          <Icons.Clock />
        </InfoSnippet>}
      </LighboxDetailInfo>
      <LighboxDetailInfo>
        {(item.Class1) && <InfoSnippet text={item.Class1}>
          <Icons.Triangle />
        </InfoSnippet>}
      </LighboxDetailInfo>
      <LighboxDetailInfo>
        {(item.Class2) && <InfoSnippet text={item.Class2}>
          <Icons.Triangle />
        </InfoSnippet>}
      </LighboxDetailInfo>
      <LighboxDetailInfo>
        {(item.Class3) && <InfoSnippet text={item.Class3}>
          <Icons.Triangle />
        </InfoSnippet>}
      </LighboxDetailInfo>
    </>
  )
}

export default ScenicInfoSnippets