import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"

const Layout = () => {
  return (
    <>

    <main>
          <Navbar/>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout