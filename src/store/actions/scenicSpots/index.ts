import {
  scenicSpotTypes,
  FetchScenicSpotsRequest,
  FetchScenicSpotsSuccess,
  FetchScenicSpotsSuccessPayload,
  FetchScenicSpotsFailure,
  FetchScenicSpotsFailurePayload
} from './type'

export const fetchScenicSpotsRequest = (): FetchScenicSpotsRequest => ({
  type: scenicSpotTypes.FETCH_SCENICSPOT_REQUEST
})

export const fetchScenicSpotsSuccess = (
  payload: FetchScenicSpotsSuccessPayload
): FetchScenicSpotsSuccess => ({
  type: scenicSpotTypes.FETCH_SCENICSPOT_SUCCESS,
  payload
})

export const fetchScenicSpotsFailure = (
  payload: FetchScenicSpotsFailurePayload
): FetchScenicSpotsFailure => ({
  type: scenicSpotTypes.FETCH_SCENICSPOT_FAILURE,
  payload
})