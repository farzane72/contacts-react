import {createBrowserRouter} from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import Contacts,{loader as ContactsLoader} from "@/pages/contacts/Contacts";
import EditContacts,{loader as  EditContactLoader } from "@/pages/contacts/EditContacts";
import AddContacts from "@/pages/contacts/AddContacts";
import Error from "@/components/error/Error"
import SingleContact,{loader as SingleContactLoader} from "@/pages/contacts/SingleContact";
import Home from "@/pages/home/home/Home";
//mport AppLayout from "@/layout/AppLayout"

//import AppLayout from "@/layout/AppLayout.jsx"
//import AuthLayout from "@/layouts/auth-layout/auth-layout.tsx";
//import Register from "@/pages/register/register.tsx";


const router = createBrowserRouter([
   {
     path:'/',
    element:<Home />,
    
  },
  {
    element: <Contacts />,
    errorElement:<Error />,
    loader:ContactsLoader,
    path: "/contacts"
},
    {
       element: <AppLayout />,
       errorElement:<Error />,
        children: [
            
            {
              element: <AddContacts />,
              errorElement:<Error />,
              path: "/contacts/add"
          },
          {
            element: <SingleContact />,
            errorElement:<Error />,
            loader:SingleContactLoader,
            path: "/contacts/:contactId"
        },
          {
            element: <EditContacts />,
            errorElement:<Error />,
            loader:EditContactLoader,
            path: "/contacts/edit/:contactId"
        },
       ]
    }
])

export default router;