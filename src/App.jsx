import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import ResetPassword from './Pages/ResetPassword'
import LoginPage from './Pages/LoginPage'
import LayoutOne from './Layout/LayoutOne'
import RegisterPage from './Pages/RegisterPage'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/sign-in' element={<LoginPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/sign-up' element={<RegisterPage/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
