import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowerRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowerRouter>
    <Routes>
      <Route element= {<App />}>
        <Route path='/' element= {<Home/>} />
        <Route path='movie/:id' element= {<Movie/>} />
        <Route path='Search' element= {<Search/>} />
       
      </Route>
    </Routes>
    </BrowerRouter>
  </React.StrictMode>,
)
