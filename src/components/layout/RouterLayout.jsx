import { NavBar } from '../../pages'
import { Outlet } from 'react-router-dom'




export const RouterLayout= () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}