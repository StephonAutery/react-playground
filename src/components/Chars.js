import { useEffect, useState } from "react";

function Chars(props) {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/?page=2")
      .then((res) => res.json())
      .then((data) => {
        setNewData(data.results);
      });
  }, []);

  return (
    <>
      {newData.map((character, index) => (
        <p key={index}>{character.name}</p>
      ))}
    </>
  );
}

export default Chars;
