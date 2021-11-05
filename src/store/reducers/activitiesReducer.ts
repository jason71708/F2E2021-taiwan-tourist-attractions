import { activityTypes, ActivitiesActions, ActivitiesState } from '../actions/activities/type'

const initialState: ActivitiesState = {
  pending: false,
  activities: [],
  error: null
}

const activitiesReducer = (state = initialState, action: ActivitiesActions) => {
  switch (action.type) {
    case activityTypes.FETCH_ACTIVITY_REQUEST:
      return {
        ...state,
        pending: true
      }
    case activityTypes.FETCH_ACTIVITY_SUCCESS:
      return {
        ...state,
        pending: false,
        activities: action.payload.activities,
        error: null
      }
    case activityTypes.FETCH_ACTIVITY_FAILURE:
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

export default activitiesReducer