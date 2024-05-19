import fetchAllPokemonDetails from "./functions/fetchAllPokemonDetails";
import Navbar from "./components/Navbar";
import Filter from "./pages/Filter";

function App() {

  const data = fetchAllPokemonDetails();

  console.log(data.name);
  return (
    <>
      <Navbar />
      <Filter />
    </>
  )
}

export default App;
