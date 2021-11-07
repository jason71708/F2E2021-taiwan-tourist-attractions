import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/reducers'
import { fetchActivitiesRequest } from './store/actions/activities'
import MainHeader from './components/Header'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppWrapper = styled.div`
  max-width: 1280px;
  width: 100vw;
  margin: 0 auto;
`

function App() {
  const dispatch = useDispatch()
  const { pending, activities, error } = useSelector(
    (state: RootState) => state.activities
  )

  // useEffect(() => {
  //   dispatch(fetchActivitiesRequest())
  // }, [])

  return (
  <BrowserRouter>
    <AppWrapper>
      <MainHeader />
      <Routes>
        <Route path="/" element={<div>1</div>}></Route>
        <Route path="/accommodation" element={<div>2</div>}></Route>
        <Route path="/traffic" element={<div>3</div>}></Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
      {/* {pending ? (
        <div>Loading...</div>
      ): error ? (
        <div>Error</div>
      ): activities.map((todo, index) => (
        <div key={todo.ID}>
          {++index}: {todo.Name || ''}
        </div>
      ))} */}
    </AppWrapper>
  </BrowserRouter>
  )
}

export default App