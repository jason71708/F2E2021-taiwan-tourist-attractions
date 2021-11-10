import {
  restaurantTypes,
  FetchRestaurantsRequest,
  FetchRestaurantsSuccess,
  FetchRestaurantsSuccessPayload,
  FetchRestaurantsFailure,
  FetchRestaurantsFailurePayload
} from './type'
import { TDXAPIParameters } from '../../../api/types'

export const fetchRestaurantsRequest = (payload: TDXAPIParameters = {}): FetchRestaurantsRequest => ({
  type: restaurantTypes.FETCH_RESTAURANT_REQUEST,
  payload
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