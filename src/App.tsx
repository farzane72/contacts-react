
 import { RouterProvider } from 'react-router-dom'
 import { ContactProvider } from './contexts/ContactContext';

import router from "@/routes/routes.tsx";
// import router from "@/routes/routes"
//import Header from "./components/header/Header"



import './App.css'

function App() {
  

  return (
   <ContactProvider>
        <RouterProvider router={router} />
   </ContactProvider>
  
   
  )
}

export default App
