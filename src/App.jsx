import { BrowserRouter, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "@/pages/Home.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
