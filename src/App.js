import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main'
import ErrorPage from './component/ErrorPage/ErrorPage';
import Tropics from './component/Tropics/Tropics';
import Statics from './component/Statics/Statics';
import Blog from './component/Blog/Blog';

function App() {
  const router=createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    loader:()=>fetch(`https://openapi.programming-hero.com/api/quiz`),
    children:[
      {path:'/',element:<Tropics></Tropics>},
      {path:'/statics',element:<Statics></Statics>},
      {path:'/blog',element:<Blog></Blog>},
    ],
  }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
