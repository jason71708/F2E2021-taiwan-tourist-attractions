import { all, fork } from 'redux-saga/effects'
import activitiesSaga from './activitiesSaga'

export function* rootSaga() {
  yield all([fork(activitiesSaga)])
}