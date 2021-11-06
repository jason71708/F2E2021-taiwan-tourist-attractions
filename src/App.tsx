import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/reducers'
import { fetchActivitiesRequest } from './store/actions/activities'
import MainHeader from './components/Header'

function App() {
  const dispatch = useDispatch()
  const { pending, activities, error } = useSelector(
    (state: RootState) => state.activities
  )

  // useEffect(() => {
  //   dispatch(fetchActivitiesRequest())
  // }, [])

  return (
  <>
    <MainHeader />
    {/* {pending ? (
      <div>Loading...</div>
    ): error ? (
      <div>Error</div>
    ): activities.map((todo, index) => (
      <div key={todo.ID}>
        {++index}: {todo.Name || ''}
      </div>
    ))} */}
  </>
  )
}

export default App