import { all, fork } from 'redux-saga/effects'
import activitiesSaga from './activitiesSaga'
import scenicSpotsSaga from './scenicSpotsSaga'

export function* rootSaga() {
  yield all([
    fork(activitiesSaga),
    fork(scenicSpotsSaga)
  ])
}