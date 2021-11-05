import {
  restaurantTypes,
  FetchRestaurantsRequest,
  FetchRestaurantsSuccess,
  FetchRestaurantsSuccessPayload,
  FetchRestaurantsFailure,
  FetchRestaurantsFailurePayload
} from './type'

export const fetchRestaurantsRequest = (): FetchRestaurantsRequest => ({
  type: restaurantTypes.FETCH_RESTAURANT_REQUEST
})

export const fetchRestaurantsSuccess = (
  payload: FetchRestaurantsSuccessPayload
): FetchRestaurantsSuccess => ({
  type: restaurantTypes.FETCH_RESTAURANT_SUCCESS,
  payload
})

export const fetchRestaurantsFailure = (
  payload: FetchRestaurantsFailurePayload
): FetchRestaurantsFailure => ({
  type: restaurantTypes.FETCH_RESTAURANT_FAILURE,
  payload
})