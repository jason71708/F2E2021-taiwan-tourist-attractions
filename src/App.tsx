import React from 'react'
import MainHeader from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScenicSpotsPage from './components/ScenicSpotsPage'
import RestaurantsPage from './components/RestaurantsPage'
import { Paths } from './constants'
import ProblemPlaceholder, { Problems } from './components/ProblemPlaceholder'

const AppWrapper = styled.div`
  color: ${props => props.theme.colors.drak};
  max-width: 1280px;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${props => props.theme.colors.backgroud};
`

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Navigate to={Paths.ScenicSpots} replace={true} />}></Route>
          <Route path={Paths.ScenicSpots} element={<ScenicSpotsPage />}></Route>
          <Route path={Paths.Accommodations} element={<RestaurantsPage />}></Route>
          {/* <Route path={Paths.Traffic} element={<div>3</div>}></Route> */}
          <Route path="*" element={<ProblemPlaceholder problem={Problems.PageNotFound}/>} />
        </Routes>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  )
}

export default App