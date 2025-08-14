import Navbar from "./components/common/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Feed from "./pages/Feed";

function App() {

  return (
    <BrowserRouter>
      <main className="min-h-screen w-screen lg:px-7xl px-xl overflow-visible">
        <Navbar/>
          <Routes>
              <Route path="/" element={<Feed/>}/>
          </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
