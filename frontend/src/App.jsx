import React from "react"
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import NoteFound from "./pages/NoteFound"
import ProtectedRoute from "./components/ProtectedRoute"



function Logout(){
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterLogout() {
  localStorage.clear()
  return <Register />
}


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/register" element={<RegisterLogout />}/>
        <Route path="*" element={<NoteFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
