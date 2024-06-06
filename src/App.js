import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import React, { useState} from "react";



function App() {
  const [progress, setProgress] = useState(0)
  const setProgressfun =(progress)=>{
     setProgress(progress)
  }
  const apiKey = process.env.REACT_APP_NEWS_API
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <LoadingBar
        color='#f11946'
        progress={progress}
      />
     <Routes>
     <Route path="/" element={<News setProgress = {setProgress} pageSize={21} apiKey = {apiKey} country = "in" category = "general" headlineName="General Headlines"></News>} />
     <Route path="/entertainment" element={<News setProgress = {setProgress} pageSize={21} apiKey = {apiKey} country = "in" category = "entertainment" headlineName="Entertainment Headlines"></News>} />
     <Route path="/business" element={<News setProgress = {setProgress} pageSize={21} apiKey = {apiKey} country = "in" category = "business" headlineName="Business Headlines"></News>} />
     <Route path="/health" element={<News setProgress = {setProgress} pageSize={21} apiKey = {apiKey} country = "in" category = "health" headlineName="Health Headlines"></News>} />
     <Route path="/science" element={<News setProgress = {setProgress} pageSize={21} apiKey = {apiKey} country = "in" category = "science" headlineName="Science Headlines"></News>} />
     <Route path="/sports" element={<News setProgress = {setProgress} pageSize={21} apiKey = {apiKey} country = "in" category = "sports" headlineName="Sports Headlines"></News>} />
     <Route path="/technology" element={<News setProgress = {setProgress} pageSize={21} apiKey = {apiKey} country = "in" category = "technology" headlineName="Technology Headlines"></News>} />
     </Routes> 
    </BrowserRouter>
  

    {/* <Navbar></Navbar>
    <News setProgress = {setProgress} pageSize={21} apiKey = {apiKey} country = "in" category = "general"></News> */}
    </>
  );
}

export default App;
