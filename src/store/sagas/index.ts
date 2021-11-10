import { all, fork } from 'redux-saga/effects'
import activitiesSaga from './activitiesSaga'
import scenicSpotsSaga from './scenicSpotsSaga'
import restaurantsSaga from './restaurantsSaga'
import hotelsSaga from './hotelsSaga'

export function* rootSaga() {
  yield all([
    fork(activitiesSaga),
    fork(scenicSpotsSaga),
    fork(restaurantsSaga),
    fork(hotelsSaga)
  ])
}