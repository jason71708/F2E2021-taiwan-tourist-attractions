import {
  activityTypes,
  FetchActivitiesRequest,
  FetchActivitiesSuccess,
  FetchActivitiesSuccessPayload,
  FetchActivitiesFailure,
  FetchActivitiesFailurePayload
} from './type'
import { TDXAPIParameters } from '../../../api/types'

export const fetchActivitiesRequest = (payload: TDXAPIParameters): FetchActivitiesRequest => ({
  type: activityTypes.FETCH_ACTIVITY_REQUEST,
  payload
})

export const fetchActivitiesSuccess = (
  payload: FetchActivitiesSuccessPayload
): FetchActivitiesSuccess => ({
  type: activityTypes.FETCH_ACTIVITY_SUCCESS,
  payload
})

export const fetchActivitiesFailure = (
  payload: FetchActivitiesFailurePayload
): FetchActivitiesFailure => ({
  type: activityTypes.FETCH_ACTIVITY_FAILURE,
  payload
})