## Router v6 React
#### What should I learn from this lecture:
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
~~~

~~~
10. Authentication and protected routes - 
