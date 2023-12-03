## Router v6 React
#### What should I learn from this lecture:
0. Install React Router v6: 
~~~
npm install react-router-dom@6
~~~
1. NavLink, Link
2. Programmatic navigation (from one page to another fter clicking link or button)
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
10. Authentication and protected routes - 
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

