import React, { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json = await resp.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Coffee List</h1>
      <ul>
        {data.map((coffee) => (
          <li key={coffee.id}>
            <strong>Name:</strong> {coffee.name}, <strong>Type:</strong> {coffee.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
