
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contacts,{loader as contactLoader} from './components/contactsPage/Contacts';
import RootLayout from './components/roootElement/Root';
import ErrorPage from './components/error/ErrorPage';
import AddContactForm,{action as formAction} from './components/contactsPage/AddContactForm';
import EditContactForm,{loaderEdit} from "./components/contactsPage/EditContactForm"

const router=createBrowserRouter([
  {
  path:'/',
  element:<RootLayout/>,
  errorElement:<ErrorPage/>,
  children:[
    {index:true,id:"contact-detail",element:<Contacts/>,loader:contactLoader},  //path:''
    {path:'addContactForm',element:<AddContactForm method="post"/>,action:formAction},
    {path:'editContacttForm/:id',element:<EditContactForm/>,action:formAction,loader:loaderEdit}
    
  ]
  }
])
function App() {
   return <RouterProvider router={router}/>
}

export default App;
