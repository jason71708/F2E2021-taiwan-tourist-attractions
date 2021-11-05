import { combineReducers } from 'redux'
import activitiesReducer from './activitiesReducer'
import restaurantsReducer from './restaurantsReducer'
import scenicSpotsReducer from './scenicSpotsReducer'

const rootReducer = combineReducers({
  activities: activitiesReducer,
  restaurants: restaurantsReducer,
  scenicSpots: scenicSpotsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer