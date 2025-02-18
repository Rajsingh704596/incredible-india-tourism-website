import { Outlet, useNavigation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

function AppLayout() {

  const navigation=useNavigation()

  if(navigation.state=="loading"){
    return <h1>Loading...</h1>
  }
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout
