
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './Layout/AppLayout'
import Home from './Pages/Home'
import Error from './Pages/Error'
import ErrorBoundary from './ErrorBoundary'
import TouristPlace from './Pages/TouristPlace'
import PlaceDetail from './Pages/PlaceDetail'

function App() {

 const router= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
      path:"/",
      element:<Home/>
    },
    {
      path:"/TouristPlace",
      element:<TouristPlace/>
    },
    {
      path:"/TouristPlace/:name",
      element:<PlaceDetail/>,
    }
  ]

  }
])

  return (

    <ErrorBoundary>
    <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App
