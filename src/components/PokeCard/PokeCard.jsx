import './PokeCard.css';
import { useState } from 'react';

export default function PokeCard({ src, name, type, id, other, peso }) {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
  };

  const types = {
    todos: '',
    fire: 'Fuego',
    grass: 'Planta',
    electric: 'Eléctrico',
    water: 'Agua',
    ground: 'Tierra',
    rock: 'Roca',
    fairy: 'Hada',
    poison: 'Veneno',
    bug: 'Bicho',
    dragon: 'Dragón',
    psychic: 'Psíquico',
    flying: 'Volador',
    fighting: 'Lucha',
    normal: 'Normal',
  };

  return (
    <>
      <article
        style={{
          backgroundColor: type !== undefined ? colors[type] : '#F5F5F5',
        }}
        onClick={openModal}
      >
        <img src={src} alt="Imagen del pokemon" className="img-pokecard" />
        <p>ID: #{id}</p>
        <h2>{name}</h2>
        <p>Tipo: {types[type]}</p>
      </article>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModal(false)}>
              &times;
            </span>
            <img src={other} alt="Imagen del pokemon" className="big-img" />
            <p style={{ fontSize: '24px' }}>ID: #{id}</p>
            <h2 style={{ fontSize: '34px' }}>{name}</h2>
            <p style={{ fontSize: '24px' }}>Tipo: {types[type]}</p>
            <p style={{ fontSize: '24px' }}>Peso: {peso}</p>
          </div>
        </div>
      )}
    </>
  );
}
