import { BrowserRouter, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "@/pages/Home.jsx"
import { Toaster } from "./components/ui/toaster"


function App() {

  return (
    <>
    <Toaster/>
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
