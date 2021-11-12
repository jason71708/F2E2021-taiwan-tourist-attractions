import { ScenicSpotTourismInfo } from '../../models/ScenicSpot'
import { LighboxDetailInfo } from '../Lightbox/style'
import InfoSnippet from '.'
import Icons from '../Icons'

function ScenicInfoSnippets({ item }: { item: ScenicSpotTourismInfo }) {
  return (
    <>
      {item.TicketInfo && <LighboxDetailInfo>
        <InfoSnippet text={item.TicketInfo}>
          <Icons.Ticket />
        </InfoSnippet>
      </LighboxDetailInfo>}
      {item.OpenTime && <LighboxDetailInfo>
        <InfoSnippet text={item.OpenTime}>
          <Icons.Clock />
        </InfoSnippet>
      </LighboxDetailInfo>}
      {(item.Class1) && <LighboxDetailInfo>
        <InfoSnippet text={item.Class1}>
          <Icons.Triangle />
        </InfoSnippet>
      </LighboxDetailInfo>}
      {(item.Class2) && <LighboxDetailInfo>
        <InfoSnippet text={item.Class2}>
          <Icons.Triangle />
        </InfoSnippet>
      </LighboxDetailInfo>}
      {(item.Class3) && <LighboxDetailInfo>
        <InfoSnippet text={item.Class3}>
          <Icons.Triangle />
        </InfoSnippet>
      </LighboxDetailInfo>}
    </>
  )
}

export default ScenicInfoSnippets