import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/home'
import RepositoryDetail from './components/RepoDetail/repositoryDetail.jsx'
import { myRepositories } from './utils.js'
import Error404 from './components/NotFound/error404.jsx'
import ErrorPage from './components/NotFound/errorBoundary.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route
      loader={myRepositories}
      path=''
      element={<Home />}/>
      <Route path='repositories/' element={
      <ErrorBoundary fallback={<ErrorPage />}>
        <RepositoryDetail/>
      </ErrorBoundary>}>
        <Route path=':name' element={<ErrorBoundary fallback={<ErrorPage />}>
          <RepositoryDetail/>
          </ErrorBoundary>}/>
      </Route>
      <Route path='*' element={<Error404 />}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
