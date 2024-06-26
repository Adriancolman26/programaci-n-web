import React, { useState, useEffect } from "react";

const Personajes = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results); // Verifica que los datos se reciban correctamente
        setCharacters(data.results);
      })
      .catch((error) => console.error("Error fetching the characters:", error));
  }, []);

  return (
    <div className="plantilla">
      {characters.map((character) => (
        <div key={character.id} className="cartas">
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default Personajes;
