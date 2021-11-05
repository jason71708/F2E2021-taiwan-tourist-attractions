import { tdxAPI } from '../../api'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ScenicSpotTourismInfo } from '../../models/ScenicSpot'
import {
  fetchScenicSpotsSuccess,
  fetchScenicSpotsFailure
} from '../actions/scenicSpots'
import { scenicSpotTypes } from '../actions/scenicSpots/type'

const fetchScenicSpots = () => (
  tdxAPI.get<ScenicSpotTourismInfo>('/v2/Tourism/ScenicSpot')
)

function* fetchScenicSpotsSaga() {
  try {
    const { data }: { data: ScenicSpotTourismInfo[] } = yield call(fetchScenicSpots)
    yield put(
      fetchScenicSpotsSuccess({
        scenicSpots: data
      })
    )
  } catch (error: any) {
    yield put(
      fetchScenicSpotsFailure({
        error
      })
    )
  }
}

function* scenicSpotsSaga() {
  yield all([takeLatest(scenicSpotTypes.FETCH_SCENICSPOT_REQUEST, fetchScenicSpotsSaga)])
}

export default scenicSpotsSaga