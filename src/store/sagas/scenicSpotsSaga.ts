import { tdxAPI } from '../../api'
import { fork, call, put, take } from 'redux-saga/effects'
import { ScenicSpotTourismInfo } from '../../models/ScenicSpot'
import {
  fetchScenicSpotsSuccess,
  fetchScenicSpotsFailure
} from '../actions/scenicSpots'
import { scenicSpotTypes } from '../actions/scenicSpots/type'
import { TDXAPIParameters } from '../../api/types'
import { getPathWithQueryString } from '../../api/utils'
import { getAuthorizationHeader } from '../../api/utils'

const fetchScenicSpots = (parameters: TDXAPIParameters) => {
  return tdxAPI.get<ScenicSpotTourismInfo>(
    getPathWithQueryString('/v2/Tourism/ScenicSpot', parameters, 'ScenicSpotName'),
    {
      headers: getAuthorizationHeader(),
    }
  );
}

function* fetchScenicSpotsSaga(parameters: TDXAPIParameters) {
  try {
    const { data }: { data: ScenicSpotTourismInfo[] } = yield call(fetchScenicSpots, parameters)
    yield put(
      fetchScenicSpotsSuccess({
        scenicSpots: data.map(raw => ({
          ...raw,
          ID: raw.ScenicSpotID,
          Name: raw.ScenicSpotName
        }))
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
  while (true) {
    const { payload }: { payload: TDXAPIParameters } = yield take(scenicSpotTypes.FETCH_SCENICSPOT_REQUEST);
    yield fork(fetchScenicSpotsSaga, payload)
  }
}

export default scenicSpotsSaga