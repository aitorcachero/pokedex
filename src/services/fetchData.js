async function fetchData() {
  const array = Array.from({ length: 850 }, (_, index) => index + 1);

  const data = array.map(async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.json();
  });

  const pokemons = await Promise.all(data);

  return pokemons;
}

export default fetchData;
