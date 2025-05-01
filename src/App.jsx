

import './App.css'
// import Loader from './components/Loader'
import Navbar from './components/Navbar'
import News from './components/news'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import  LoadingBar from "react-top-loading-bar"
import React, { useState  } from 'react';



function App() {
  
  // business entertainment general health science sports technology.
  const [progress, setProgress] = useState(0);

  const API_KEY=import.meta.env.VITE_API_KEY;

  return (
    <>
    <Router>
    <Navbar/>
    <LoadingBar
          color="#fdee00"
          shadow="true"
          progress={progress}
          
    />
    

    <Routes> 
      <Route path='/' element={<News setProgress={setProgress}  key="genral" category="general"/>}/>
      <Route path='/business' element={<News setProgress={setProgress}   key="business" category="business"/>}/>
      <Route path='/entertainment' element={<News setProgress={setProgress}  key="entertainment" category="entertainment"/>}/>
      <Route path='/general' element={<News setProgress={setProgress}  key="general" category="general"/>}/>
      <Route path='/health' element={<News setProgress={setProgress}   key="health" category="health"/>}/>
      <Route path='/science' element={<News setProgress={setProgress}   key="science" category="science"/>}/>
      <Route path='/sports' element={<News setProgress={setProgress}   key="sports" category="sports"/>}/>
      <Route path='/technology' element={<News setProgress={setProgress}    key="technology" category="technology"/>}/>
      <Route path="*" element={<PageNotFound/>}></Route>


    </Routes>
    </Router>
    
    </>
  )
}

export default App
