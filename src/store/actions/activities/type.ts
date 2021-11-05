import { ActivityTourismInfo } from '../../../models/Activity'

export enum activityTypes {
  FETCH_ACTIVITY_REQUEST = 'FETCH_ACTIVITY_REQUEST',
  FETCH_ACTIVITY_SUCCESS = 'FETCH_ACTIVITY_SUCCESS',
  FETCH_ACTIVITY_FAILURE = 'FETCH_ACTIVITY_FAILURE'
}

export type ActivitiesState = {
  pending: boolean
  activities: ActivityTourismInfo[]
  error: string | null
}

export type FetchActivitiesSuccessPayload = {
  activities: ActivityTourismInfo[]
}

export type FetchActivitiesFailurePayload = {
  error: string
}

export type FetchActivitiesRequest = {
  type: activityTypes.FETCH_ACTIVITY_REQUEST
}

export type FetchActivitiesSuccess = {
  type: activityTypes.FETCH_ACTIVITY_SUCCESS
  payload: FetchActivitiesSuccessPayload
}

export type FetchActivitiesFailure = {
  type: activityTypes.FETCH_ACTIVITY_FAILURE
  payload: FetchActivitiesFailurePayload
}

export type ActivitiesActions =
  | FetchActivitiesRequest
  | FetchActivitiesSuccess
  | FetchActivitiesFailure