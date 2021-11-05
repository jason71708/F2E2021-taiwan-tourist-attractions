import { tdxAPI } from '../../api'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ActivityTourismInfo } from '../../models/Activity'
import {
  fetchActivitiesSuccess,
  fetchActivitiesFailure
} from '../actions/activities'
import { activityTypes } from '../actions/activities/type'

const fetchActivities = () => (
  tdxAPI.get<ActivityTourismInfo>('/v2/Tourism/Activity')
)

function* fetchActivitiesSaga() {
  try {
    const { data }: { data: ActivityTourismInfo[] } = yield call(fetchActivities)
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
  yield all([takeLatest(activityTypes.FETCH_ACTIVITY_REQUEST, fetchActivitiesSaga)])
}

export default activitiesSaga