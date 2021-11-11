import { tdxAPI } from '../../api'
import { fork, call, put, take } from 'redux-saga/effects'
import { RestaurantTourismInfo } from '../../models/Restaurant'
import {
  fetchRestaurantsSuccess,
  fetchRestaurantsFailure
} from '../actions/restaurants'
import { restaurantTypes } from '../actions/restaurants/type'
import { TDXAPIParameters } from '../../api/types'
import { getPathWithQueryString } from '../../api/utils'
import { getAuthorizationHeader } from '../../api/utils'

const fetchRestaurants = (parameters: TDXAPIParameters) => (
  tdxAPI.get<RestaurantTourismInfo>(getPathWithQueryString('/v2/Tourism/Restaurant', parameters), {
    headers: getAuthorizationHeader()
  })
)

function* fetchRestaurantsSaga(parameters: TDXAPIParameters) {
  try {
    const { data }: { data: RestaurantTourismInfo[] } = yield call(fetchRestaurants, parameters)
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
  while (true) {
    const { payload }: { payload: TDXAPIParameters } = yield take(restaurantTypes.FETCH_RESTAURANT_REQUEST);
    yield fork(fetchRestaurantsSaga, payload)
  }
}

export default restaurantsSaga