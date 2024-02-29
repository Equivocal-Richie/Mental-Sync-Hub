import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import App from './App.jsx'
import './styles/index.css'
import './styles/App.css'

import Homepage from './components/Homepage.jsx'
import NotFound from './components/NotFound.jsx'

import Quizzes from './components/postlogin/Quizzes.jsx'
import Challenges from './components/postlogin/Challenges.jsx'
import Booksession from './components/postlogin/Booksession.jsx'
import Trackmood from './components/postlogin/Trackmood.jsx'
import Communities from './components/postlogin/Communities.jsx'
import Resources from './components/postlogin/Resources.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <NotFound />
  },
  {
  path: 'profile',
  element: <Quizzes/>
  },
  {
    path: 'challenges',
    element: <Challenges />
  },
  {
    path: 'booking',
    element: <Booksession />
  },
  {
    path: 'trackmood',
    element: <Trackmood />
  },
  {
    path: 'communities',
    element: <Communities />
  },
  {
    path: 'resources',
    element: <Resources />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
