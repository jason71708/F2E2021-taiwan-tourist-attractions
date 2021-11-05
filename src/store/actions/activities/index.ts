import {
  activityTypes,
  FetchActivitiesRequest,
  FetchActivitiesSuccess,
  FetchActivitiesSuccessPayload,
  FetchActivitiesFailure,
  FetchActivitiesFailurePayload
} from './type'

export const fetchActivitiesRequest = (): FetchActivitiesRequest => ({
  type: activityTypes.FETCH_ACTIVITY_REQUEST
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