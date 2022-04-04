
import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {

  const[word,setWord]= useState("");
  const[meanings,setMeanings]= useState([]);
  const[category,setCategory]= useState("en");

  const getData = async() =>{
    try{
      const data = await axios( `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      // `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      setMeanings(data.data);
    }catch(error){
      console.log(error)
    }
  }
  console.log(meanings)
  useEffect(()=>{
    getData()
  },[word,category])

  return (
    <div 
      className="App"
      style={{height:"100vh",backgroundColor:"yellow",color:"black"}}>
      <Container 
        maxWidth="md"
        style={{display:"flex",flexDirection:"column",height:"100vh"}}>
          <Header 
          category={category} 
          setCategory={setCategory}
          word = {word}
          setWord= {setWord}
          />
          dict</Container>
    </div>
  );
}

export default App;
