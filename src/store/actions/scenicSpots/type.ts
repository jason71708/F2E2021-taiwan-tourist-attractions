import { ScenicSpotTourismInfo } from '../../../models/ScenicSpot'

export enum scenicSpotTypes {
  FETCH_SCENICSPOT_REQUEST = 'FETCH_SCENICSPOT_REQUEST',
  FETCH_SCENICSPOT_SUCCESS = 'FETCH_SCENICSPOT_SUCCESS',
  FETCH_SCENICSPOT_FAILURE = 'FETCH_SCENICSPOT_FAILURE'
}

export type ScenicSpotsState = {
  pending: boolean
  scenicSpots: ScenicSpotTourismInfo[]
  error: string | null
}

export type FetchScenicSpotsSuccessPayload = {
  scenicSpots: ScenicSpotTourismInfo[]
}

export type FetchScenicSpotsFailurePayload = {
  error: string
}

export type FetchScenicSpotsRequest = {
  type: scenicSpotTypes.FETCH_SCENICSPOT_REQUEST
}

export type FetchScenicSpotsSuccess = {
  type: scenicSpotTypes.FETCH_SCENICSPOT_SUCCESS
  payload: FetchScenicSpotsSuccessPayload
}

export type FetchScenicSpotsFailure = {
  type: scenicSpotTypes.FETCH_SCENICSPOT_FAILURE
  payload: FetchScenicSpotsFailurePayload
}

export type ScenicSpotsActions =
  | FetchScenicSpotsRequest
  | FetchScenicSpotsSuccess
  | FetchScenicSpotsFailure