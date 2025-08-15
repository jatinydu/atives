import Navbar from "./components/common/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Feed from "./pages/Feed";
import JobPage from "./pages/JobPage";

function App() {

  return (
    <BrowserRouter>
      <main className="min-h-screen w-screen lg:px-7xl px-xl relative">
        <Navbar/>
          <Routes>
              <Route path="/" element={<Feed/>}/>
              <Route path="/jobs" element={<JobPage/>}/>
          </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
