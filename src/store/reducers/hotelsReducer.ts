import { hotelTypes, HotelsActions, HotelsState } from '../actions/hotels/type'

const initialState: HotelsState = {
  pending: false,
  hotels: [],
  error: null
}

const hotelsReducer = (state = initialState, action: HotelsActions) => {
  switch (action.type) {
    case hotelTypes.FETCH_HOTEL_REQUEST:
      return {
        ...state,
        pending: true
      }
    case hotelTypes.FETCH_HOTEL_SUCCESS:
      return {
        ...state,
        pending: false,
        hotels: action.payload.hotels,
        error: null
      }
    case hotelTypes.FETCH_HOTEL_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}

export default hotelsReducer