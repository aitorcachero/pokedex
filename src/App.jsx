import PokeCard from './components/PokeCard/PokeCard';
import usePokemons from './hooks/usePokemons';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

function App() {
  const { pokemons } = usePokemons();
  const [poks, setPoks] = useState(pokemons);

  const handleSelect = (e) => {
    console.log(e);
    if (e.target.value === '') {
      setPoks(pokemons);
    } else {
      const filter = pokemons.filter(
        (pokemon) => pokemon.types[0].type.name === e.target.value
      );
      setPoks(filter);
    }
  };

  return (
    <>
      <h1 className="main-title">Pokedex</h1>
      {poks && (
        <>
          <nav className="nav">
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
          </nav>
          <div className="grid-container">
            <ul>
              {poks.map((pokemon) => (
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
