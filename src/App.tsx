import Navbar from "./components/common/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Feed from "./pages/Feed";

function App() {

  return (
    <main className="min-h-screen w-screen lg:px-7xl px-xl">
      {/* Navbar */}
      <Navbar/>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Feed/>}/>
         </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
