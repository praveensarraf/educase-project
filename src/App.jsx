import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/profile',
      element: <Profile/>
    },
    {
      path: '*',
      element: <Home />,
    }
  ]);

  return (
    <>
      <>
        <RouterProvider router={appRouter} />
      </>
    </>
  )
}

export default App
