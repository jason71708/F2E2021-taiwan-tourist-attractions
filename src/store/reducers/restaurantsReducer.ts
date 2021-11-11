import { restaurantTypes, RestaurantsActions, RestaurantsState } from '../actions/restaurants/type'

const initialState: RestaurantsState = {
  pending: false,
  restaurants: [],
  error: null
}

const restaurantsReducer = (state = initialState, action: RestaurantsActions) => {
  switch (action.type) {
    case restaurantTypes.FETCH_RESTAURANT_REQUEST:
      return {
        ...state,
        pending: true
      }
    case restaurantTypes.FETCH_RESTAURANT_SUCCESS:
      return {
        ...state,
        pending: false,
        restaurants: action.payload.restaurants,
        error: null
      }
    case restaurantTypes.FETCH_RESTAURANT_FAILURE:
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

export default restaurantsReducer