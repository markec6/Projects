import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"

function App() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] transition-all duration-300 ease-in-out">
      <Navigation/>
      <Outlet/>
    </div>
  )
}

export default App
