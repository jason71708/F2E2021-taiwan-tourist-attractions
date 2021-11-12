import { ActivityTourismInfo } from '../../models/Activity'
import { LighboxDetailInfo } from '../Lightbox/style'
import InfoSnippet from '.'
import Icons from '../Icons'

function ActivityInfoSnippets({ item }: { item: ActivityTourismInfo }) {
  return (
    <>
      <LighboxDetailInfo>
        {item.Charge && <InfoSnippet text={item.Charge}>
          <Icons.Ticket />
        </InfoSnippet>}
      </LighboxDetailInfo>
      <LighboxDetailInfo>
        {item.NonCycle && <InfoSnippet text={item.NonCycle}>
          <Icons.Clock />
        </InfoSnippet>}
      </LighboxDetailInfo>
      <LighboxDetailInfo>
        {item.Cycle && <InfoSnippet text={item.Cycle}>
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
    </>
  )
}

export default ActivityInfoSnippets