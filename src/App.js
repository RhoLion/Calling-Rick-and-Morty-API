import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";



function App() {

  const url = 'https://rickandmortyapi.com/api/character';
const [character, setCharacter] = useState([]);
const [info, setInfo] = useState({});
  const fetchCharacters = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCharacter(data.results)
      setInfo(data.info)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
  fetchCharacters(url)
  }, [])
  
  const onPrevious = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  return (
    <>
    <Navbar brand='Rick and Morty App'/>
    <section className="container mt-5">
    <Pages prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    <Characters character={character} />
    <Pages prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    </section>
    </>
 
  );
}

export default App;
