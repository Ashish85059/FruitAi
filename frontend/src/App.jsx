import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import LoginPage from './pages/LoginPage';
import About from './pages/About';
import ChatBot from './pages/ChatBot';
import FAQPage from './pages/FAQPage';
import TranslatorPage from './pages/TranslatorPage';
import HomePage from './pages/HomePage';

const router=createBrowserRouter([
  {
    path: "/",
    element:<LoginPage/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/chatbot",
    element:<ChatBot/>
  },
  {
    path:"/faqs",
    element:<FAQPage/>
  },
  {
    path:"/translator",
    element:<TranslatorPage/>
  },
  {
    path:"/home",
    element:<HomePage/>
  }
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
