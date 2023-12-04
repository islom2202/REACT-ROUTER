import React, { Suspense } from 'react'
import {Route, Routes} from "react-router-dom"
import { Header } from './Layouts/Header'
import { Footer } from './Layouts/Footer'
import { Home } from './Pages/Home'
import { Cars } from './Pages/Cars/Cars'
import { Car } from './Pages/Cars/Car'
import { LandCruisers } from './Pages/Cars/LandCruisers'
import { NoMatch } from './Pages/NoMatch'
import { NewCars } from './Pages/Cars/NewCars'
import { BrandCars } from './Pages/Cars/BrandCars'
import { Pagination } from './Pages/Pagination'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import { AuthProvider } from './components/Auth'
import { RequireAuth } from './components/requireAuth'
import { useLocation } from 'react-router-dom'


// Lazy Loading Component
const LazyAbout = React.lazy(() => import('./Pages/About'))

export const App = () => {
  // For testin useLocation()
  const location = useLocation()
  console.log("pathName: " + location.pathname)
  console.log("search: " + location.search)
  console.log("hash: " + location.hash)
  console.log("state: " + location.state)
  return (
    <div>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cars" element={<Cars />} />
          {/*URL Params*/}
          <Route path=":carsId" element={<Car />} />
          {/*Nested Routes*/}
          <Route path="landCruisers" element={<LandCruisers />}>
            <Route path="newCars" element={<NewCars />} />
            <Route path="brandCars" element={<BrandCars />} />
            {/*Index Route*/}
            <Route index element={<NewCars />} />
          </Route>
          <Route path="/pagination" element={<Pagination />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>"Loading..."</div>}>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route path="login" element={<Login />} />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  )
}
