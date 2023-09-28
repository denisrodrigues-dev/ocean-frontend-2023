import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card'

function App() {
  const [data, setData] = useState([]);


  async function fetchDataApi() {
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const data = await response.json();

    setData(data.results);    
  }

  useEffect(() => {
    fetchDataApi()
  }, [])


  return (
    <>
      {data.map(function (item, index) {
        return <Card key={`card_${index}`} item={item} />
      })}
    </>
  )
}

export default App