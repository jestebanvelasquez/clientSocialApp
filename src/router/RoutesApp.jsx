import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage, LoginPage, NavBar, ProfilePage } from '../pages'
import { RouterLayout } from '../components/layout/RouterLayout'


export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RouterLayout />}>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/profile/:userId' element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
