import Navbar from "./components/common/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Feed from "./pages/Feed";
import JobPage from "./pages/JobPage";
import ExplorePage from "./pages/ExplorePage";
import Profile from "./pages/Profile";

function App() {

  return (
    <BrowserRouter>
      <main className="min-h-screen w-screen lg:px-7xl px-xl relative">
        <Navbar/>
          <Routes>
              <Route path="/" element={<Feed/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/jobs" element={<JobPage/>}/>
              <Route path="/explore" element={<ExplorePage/>}/>
          </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
