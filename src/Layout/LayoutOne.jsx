import React from 'react'
import Home from '../Pages/Home'
import { Outlet } from 'react-router-dom'

const LayoutOne = () => {
  return (
    <>
      <Home/>
      <Outlet/>
    </>
  )
}

export default LayoutOne
