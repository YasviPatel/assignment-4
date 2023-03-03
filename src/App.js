
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contacts from './components/contactsPage/Contacts';
import RootLayout from './components/roootElement/Root';
import ErrorPage from './components/error/ErrorPage';
import AddContactForm,{action as formAction} from './components/contactsPage/AddContactForm';


const router=createBrowserRouter([
  {
  path:'/',
  element:<RootLayout/>,
  errorElement:<ErrorPage/>,
  children:[
    {index:true,element:<Contacts/>},  //path:''
    {path:'addContactForm',element:<AddContactForm/>,action:formAction}
    
  ]
  }
])
function App() {
   return <RouterProvider router={router}/>
}

export default App;
