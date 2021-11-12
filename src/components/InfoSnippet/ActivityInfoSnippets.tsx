import { ActivityTourismInfo } from '../../models/Activity'
import { LighboxDetailInfo } from '../Lightbox/style'
import InfoSnippet from '.'
import Icons from '../Icons'

function ActivityInfoSnippets({ item }: { item: ActivityTourismInfo }) {
  return (
    <>
      {item.Charge && <LighboxDetailInfo>
        <InfoSnippet text={item.Charge}>
          <Icons.Ticket />
        </InfoSnippet>
      </LighboxDetailInfo>}
      {item.NonCycle && <LighboxDetailInfo>
        <InfoSnippet text={item.NonCycle}>
          <Icons.Clock />
        </InfoSnippet>
      </LighboxDetailInfo>}
      {item.Cycle && <LighboxDetailInfo>
        <InfoSnippet text={item.Cycle}>
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
    </>
  )
}

export default ActivityInfoSnippets