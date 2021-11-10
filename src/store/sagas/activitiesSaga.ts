import { tdxAPI } from '../../api'
import { fork, call, put, take } from 'redux-saga/effects'
import { ActivityTourismInfo } from '../../models/Activity'
import {
  fetchActivitiesSuccess,
  fetchActivitiesFailure
} from '../actions/activities'
import { activityTypes } from '../actions/activities/type'
import { TDXAPIParameters } from '../../api/types'
import { getPathWithQueryString } from '../../api/utils'

const fetchActivities = (parameters: TDXAPIParameters) => (
  tdxAPI.get<ActivityTourismInfo>(getPathWithQueryString('/v2/Tourism/Activity', parameters))
)

function* fetchActivitiesSaga(parameters: TDXAPIParameters) {
  try {
    const { data }: { data: ActivityTourismInfo[] } = yield call(fetchActivities, parameters)
    yield put(
      fetchActivitiesSuccess({
        activities: data
      })
    )
  } catch (error: any) {
    yield put(
      fetchActivitiesFailure({
        error
      })
    )
  }
}

function* activitiesSaga() {
  while (true) {
    const { payload }: { payload: TDXAPIParameters } = yield take(activityTypes.FETCH_ACTIVITY_REQUEST);
    yield fork(fetchActivitiesSaga, payload)
  }
}

export default activitiesSaga