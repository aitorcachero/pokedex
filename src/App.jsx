import PokeCard from './components/PokeCard/PokeCard';

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import fetchData from './services/fetchData';
import Loader from './components/Loader/Loader';
import TextField from '@mui/material/TextField';
import ModalNoResults from './components/ModalNoResults/ModalNoResults';

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [filterdPokemons, setFilteredPokemons] = useState(null);
  const [noResults, setNoResults] = useState(false);

  React.useEffect(() => {
    const getPokemons = async () => {
      const poks = await fetchData();
      setPokemons(poks);
      setFilteredPokemons(poks);
    };
    getPokemons();
  }, []);

  const handleSelect = (e) => {
    if (e.target.value === '') {
      setFilteredPokemons(pokemons);
    } else {
      const filter = pokemons.filter(
        (pokemon) => pokemon.types[0].type.name === e.target.value
      );
      setFilteredPokemons(filter);
    }
  };

  const handleChange = (e) => {
    const filter = pokemons.filter((pokemon) =>
      pokemon.name.includes(e.target.value.toLowerCase())
    );
    filter.length === 0 ? setNoResults(true) : setNoResults(false);
    setFilteredPokemons(filter);
  };

  return (
    <>
      <h1 className="main-title">Pokedex</h1>
      {!filterdPokemons && <Loader />}
      {filterdPokemons && (
        <>
          <nav className="nav">
            <div className="divisor">
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ textAlign: 'center', fontSize: '1.5rem' }}
                >
                  Tipo
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ color: 'black' }}
                  onChange={handleSelect}
                >
                  <FormControlLabel
                    value=""
                    control={<Radio />}
                    label="Todos"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="fire"
                    control={<Radio />}
                    label="Fuego"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="grass"
                    control={<Radio />}
                    label="Planta"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="electric"
                    control={<Radio />}
                    label="Eléctrico"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="water"
                    control={<Radio />}
                    label="Agua"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="ground"
                    control={<Radio />}
                    label="Tierra"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="rock"
                    control={<Radio />}
                    label="Roca"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="fairy"
                    control={<Radio />}
                    label="Hada"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="poison"
                    control={<Radio />}
                    label="Veneno"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="bug"
                    control={<Radio />}
                    label="Bicho"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="dragon"
                    control={<Radio />}
                    label="Dragón"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="psychic"
                    control={<Radio />}
                    label="Psíquico"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="flying"
                    control={<Radio />}
                    label="Volador"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="fighting"
                    control={<Radio />}
                    label="Lucha"
                    onSelect={handleSelect}
                  />
                  <FormControlLabel
                    value="normal"
                    control={<Radio />}
                    label="Normal"
                    onSelect={handleSelect}
                  />
                </RadioGroup>
              </FormControl>

              <TextField
                id="outlined-basic"
                label="Buscar por nombre..."
                variant="outlined"
                className="search-field"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </nav>
          {noResults && <ModalNoResults />}

          <div className="grid-container">
            <ul>
              {filterdPokemons.map((pokemon) => (
                <li key={pokemon.id}>
                  <PokeCard
                    src={pokemon.sprites.front_default}
                    name={pokemon.name.toUpperCase()}
                    type={pokemon.types[0].type.name}
                    id={pokemon.id}
                    other={pokemon.sprites.other.dream_world.front_default}
                    peso={pokemon.weight}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default App;
