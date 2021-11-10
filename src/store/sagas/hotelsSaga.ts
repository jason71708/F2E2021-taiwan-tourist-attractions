import { tdxAPI } from '../../api'
import { fork, call, put, take } from 'redux-saga/effects'
import { HotelTourismInfo } from '../../models/Hotel'
import {
  fetchHotelsSuccess,
  fetchHotelsFailure
} from '../actions/hotels'
import { hotelTypes } from '../actions/hotels/type'
import { TDXAPIParameters } from '../../api/types'
import { getPathWithQueryString } from '../../api/utils'

const fetchHotels = (parameters: TDXAPIParameters) => (
  tdxAPI.get<HotelTourismInfo>(getPathWithQueryString('/v2/Tourism/Hotel', parameters))
)

function* fetchHotelsSaga(parameters: TDXAPIParameters) {
  try {
    const { data }: { data: HotelTourismInfo[] } = yield call(fetchHotels, parameters)
    yield put(
      fetchHotelsSuccess({
        hotels: data
      })
    )
  } catch (error: any) {
    yield put(
      fetchHotelsFailure({
        error
      })
    )
  }
}

function* hotelsSaga() {
  while (true) {
    const { payload }: { payload: TDXAPIParameters } = yield take(hotelTypes.FETCH_HOTEL_REQUEST);
    yield fork(fetchHotelsSaga, payload)
  }
}

export default hotelsSaga