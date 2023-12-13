import { Outlet } from "react-router-dom"
import Footer from "../components/commen/Footer/Footer"
import Navbar from "../components/commen/navbar/Navbar"

const Applayout = () => {
  return (
  <div className="max-w-[1200px]  mx-auto my-0 px-4 py-0">
  <Navbar/>,
  <Outlet />
  <Footer />
  </div>
  )
}

export default Applayout