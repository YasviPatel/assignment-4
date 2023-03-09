
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contacts,{loader as contactLoader} from './components/contactsPage/Contacts';
import RootLayout from './components/roootElement/Root';
import ErrorPage from './components/error/ErrorPage';
import AddContactForm,{action as formAction} from './components/contactsPage/AddContactForm';
import EditContactForm,{loaderEdit} from "./components/contactsPage/EditContactForm";
import ContactDetail,{loader as contactDetailLoader} from './components/contactsPage/ContactDetail';

const router=createBrowserRouter([
  {
  path:'/',
  element:<RootLayout/>,
  errorElement:<ErrorPage/>,
  loader:contactLoader,
  id:"contact-detail",
  children:[
    {path:"",element:<Contacts/>,children:[
      {
        path:':id',element:<ContactDetail/>,loader:contactDetailLoader,children:[
           {path:'edit',element:<EditContactForm method="patch"/>,action:formAction,loader:loaderEdit}
        ]
      }
    ]},  //path:''
    {path:'addContactForm',element:<AddContactForm method="post"/>,action:formAction},
    
  ]
  }
])
function App() {
   return <RouterProvider router={router}/>
}

export default App;
