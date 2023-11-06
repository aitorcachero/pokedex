import { pokemons } from '../mocks/pokemons.json';

export default function usePokemons() {
  return { pokemons };
}

// import { useState, useEffect } from 'react';

// export default function usePokemons() {
//   const [pokemons, setPokemons] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const array = Array.from({ length: 151 }, (_, index) => index + 1);

//       const data = array.map(async (id) => {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//         return response.json();
//       });

//       const pokemons = await Promise.all(data);
//       setPokemons(pokemons);
//       console.log(pokemons);
//     }
//     fetchData();
//   }, []);

//   return pokemons;
// }
