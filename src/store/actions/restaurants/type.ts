import { RestaurantTourismInfo } from '../../../models/Restaurant'

export enum restaurantTypes {
  FETCH_RESTAURANT_REQUEST = 'FETCH_RESTAURANT_REQUEST',
  FETCH_RESTAURANT_SUCCESS = 'FETCH_RESTAURANT_SUCCESS',
  FETCH_RESTAURANT_FAILURE = 'FETCH_RESTAURANT_FAILURE'
}

export type RestaurantsState = {
  pending: boolean
  restaurants: RestaurantTourismInfo[]
  error: string | null
}

export type FetchRestaurantsSuccessPayload = {
  restaurants: RestaurantTourismInfo[]
}

export type FetchRestaurantsFailurePayload = {
  error: string
}

export type FetchRestaurantsRequest = {
  type: restaurantTypes.FETCH_RESTAURANT_REQUEST
}

export type FetchRestaurantsSuccess = {
  type: restaurantTypes.FETCH_RESTAURANT_SUCCESS
  payload: FetchRestaurantsSuccessPayload
}

export type FetchRestaurantsFailure = {
  type: restaurantTypes.FETCH_RESTAURANT_FAILURE
  payload: FetchRestaurantsFailurePayload
}

export type RestaurantsActions =
  | FetchRestaurantsRequest
  | FetchRestaurantsSuccess
  | FetchRestaurantsFailure