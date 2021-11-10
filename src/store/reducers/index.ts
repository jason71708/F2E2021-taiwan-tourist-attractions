import { combineReducers } from 'redux'
import activitiesReducer from './activitiesReducer'
import restaurantsReducer from './restaurantsReducer'
import scenicSpotsReducer from './scenicSpotsReducer'
import hotelsReducer from './hotelsReducer'

const rootReducer = combineReducers({
  activities: activitiesReducer,
  restaurants: restaurantsReducer,
  scenicSpots: scenicSpotsReducer,
  hotels: hotelsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer