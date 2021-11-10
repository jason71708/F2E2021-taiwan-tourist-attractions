import {
  scenicSpotTypes,
  FetchScenicSpotsRequest,
  FetchScenicSpotsSuccess,
  FetchScenicSpotsSuccessPayload,
  FetchScenicSpotsFailure,
  FetchScenicSpotsFailurePayload
} from './type'
import { TDXAPIParameters } from '../../../api/types'

export const fetchScenicSpotsRequest = (payload: TDXAPIParameters = {}): FetchScenicSpotsRequest => ({
  type: scenicSpotTypes.FETCH_SCENICSPOT_REQUEST,
  payload
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