import { tdxAPI } from '../../api'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { RestaurantTourismInfo } from '../../models/Restaurant'
import {
  fetchRestaurantsSuccess,
  fetchRestaurantsFailure
} from '../actions/restaurants'
import { restaurantTypes } from '../actions/restaurants/type'

const fetchRestaurants = () => (
  tdxAPI.get<RestaurantTourismInfo>('/v2/Tourism/Restaurant')
)

function* fetchRestaurantsSaga() {
  try {
    const { data }: { data: RestaurantTourismInfo[] } = yield call(fetchRestaurants)
    yield put(
      fetchRestaurantsSuccess({
        restaurants: data
      })
    )
  } catch (error: any) {
    yield put(
      fetchRestaurantsFailure({
        error
      })
    )
  }
}

function* restaurantsSaga() {
  yield all([takeLatest(restaurantTypes.FETCH_RESTAURANT_REQUEST, fetchRestaurantsSaga)])
}

export default restaurantsSaga