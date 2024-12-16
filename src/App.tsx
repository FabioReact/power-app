import { useState } from "react";

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState('');

  return (
    <>
      <h1>React App</h1>
      <h2>List of heroes</h2>
      <ul>
        <li onClick={() => setSelectedLetter('A')}>A</li>
        <li>B</li>
        <li>C</li>
        <li>...</li>
        <li>Z</li>
      </ul>
      <p>Vouz avez cliqué sur la lettre: {selectedLetter}</p>
    </>
  )
}

export default App