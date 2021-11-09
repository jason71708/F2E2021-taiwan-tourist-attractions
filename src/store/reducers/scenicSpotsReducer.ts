import { scenicSpotTypes, ScenicSpotsActions, ScenicSpotsState } from '../actions/scenicSpots/type'

const initialState: ScenicSpotsState = {
  pending: false,
  scenicSpots: [],
  error: null
}

const scenicSpotsReducer = (state = initialState, action: ScenicSpotsActions) => {
  switch (action.type) {
    case scenicSpotTypes.FETCH_SCENICSPOT_REQUEST:
      return {
        ...state,
        pending: true
      }
    case scenicSpotTypes.FETCH_SCENICSPOT_SUCCESS:
      return {
        ...state,
        pending: false,
        scenicSpots: action.payload.scenicSpots,
        error: null
      }
    case scenicSpotTypes.FETCH_SCENICSPOT_FAILURE:
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

export default scenicSpotsReducer