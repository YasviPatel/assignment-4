
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contacts,{loader as contactLoader} from './components/contactsPage/Contacts';
import RootLayout from './components/rootElement/Root';
import ErrorPage from './components/error/ErrorPage';
import ContactForm,{action as formAction} from './components/contactsPage/ContactForm';
import EditContact,{loaderEdit} from "./components/contactsPage/EditContact";
import ContactDetail,{loader as contactDetailLoader} from './components/contactsPage/ContactDetail';
import HomePage from "./components/contactsPage/HomePage"

const router=createBrowserRouter([
  {
  path:'/',
  element:<RootLayout/>,
  errorElement:<ErrorPage/>,
  children:[
    {path:'',element:<HomePage/>},
    {path:"contacts",element:<Contacts/>,loader:contactLoader,id:"contact-detail",children:[
      {
        path:':id',element:<ContactDetail/>,loader:contactDetailLoader
        ,children:[
           {path:'edit',element:<EditContact/>,action:formAction,loader:loaderEdit}
        ]
      }
    ]},  //path:''
     {path:'contacts/contactForm',element:<ContactForm method="post"/>,action:formAction},
    
  ]
  }
])
function App() {
   return <RouterProvider router={router}/>
}

export default App;
