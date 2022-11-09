import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./PrivateRoutes"
import { AuthRoutes } from "./AuthRoutes"

// Rutas públicas
import { Home } from './../pages/Home'

// Rutas de auth
import { Login } from './../pages/Login'
import { Register } from './../pages/Register'

// Rutas del usuario
import { Profile } from './../pages/Profile'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/*"
          element={
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
          }
        />

        <Route
          path="/login"
          element={
            <AuthRoutes>
              <Login/>
            </AuthRoutes>
          }
        />

        <Route
          path="/register"
          element={
            <AuthRoutes>
              <Register/>
            </AuthRoutes>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <Profile/>
            </PrivateRoutes>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}
