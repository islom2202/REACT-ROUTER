## Router v6 React
#### What should I learn from this lecture:
0. Install React Router v6: 
~~~
npm install react-router-dom@6
~~~
1. NavLink, Link
2. Programmatic navigation (from one page to another after clicking link or button), using **useNavigate** or better **Navigate**.
2. What does **{replace: true}** do? - instead of adding new route in the history stack it replaces the given route with a new route.
3. No Match page (if route is not found)
4. Nested Routes (to make sort of tab navigation inside page, with the use of <Outlet/>, which gives seemless use experience)
5. Index Route (to make child, nested element value on a parents level, i. e. 'default')
6. Dynamic route and  'useParams' to for fetching and displaying element's data based on its id
7. Search Params - (to make filtaration and pagination)
8. Relative Links - 
- example of relative links (inside landCrousers component): 
~~~
<NavLink to="newCars">New Cars (nested)</NavLink> 
~~~
- example of absolute links (inside landCrousers component):
~~~
<NavLink to="/landCruisers/brandCars">New Cars (nested)</NavLink> 
~~~
9. Lazy Loading - this is used because when we open the website it usually downloads data for all pages, whereas if the website is too big it makes initial loading very slow. Therefore we need to make 'progressive' download of page, only when the user enters the page. To make this work we use following:
- Suspense (fnc from React)
- "React.lazy(()=>import(pathName))"
- Wrap Route component inside Suspense, which has fallback for loading
10. Authentication and protected routes.  Hre are step by step example:
 - 1. Step one is to create **Auth.jsx**:
 ~~~
 import React, {createContext, useContext, useState} from 'react'
const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const login = (user) =>{
     setUser(user)
  }
  const logout = () =>{ 
    setUser(null)
  }
  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => { 
  return useContext(AuthContext)
}
~~~
- 2. Step two is to create **RequireAuth.jsx**:
~~~
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";
export const RequireAuth = ({children}) => {
const auth = useAuth();
const location = useLocation();
return !auth.user ? <Navigate to="/login" state={{path: location.pathname}}/> :  children
}
~~~
- 3. Wrap Component that should be protected in **App.jsx**:
~~~
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
~~~
11. Context API (hook in React) - is used to create data or state that is accessible for all components, just like Redux Toolkit. Here is an example of how to use it : 
- 1. First step:  Create Context:
~~~ 
import React from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
~~~
- 2. Consume (get access to its data):
~~~
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Dashboard = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Dashboard;
~~~
12. useLocation() - check requireAuth and Login components:
 - const location = useLocation()
  console.log("pathName: " + location.pathname)
  console.log("search: " + location.search)
  console.log("hash: " + location.hash)
  console.log("state: " + location.state)
