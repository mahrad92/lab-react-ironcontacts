import './App.css';
import contacts from "./contacts.json";
import React, { useState } from 'react';

const defaultList = contacts.splice(0, 5)

const sortListByNameAndPopularity = (arr) => {
  return arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1
    } else if (a.name < b.name) {
      return -1
    } else if (a.popularity > b.popularity) {
      return 1
    } else {
      return -1
    }
  })
}
function App() {
  const [slContact, setSlContact] = useState(sortListByNameAndPopularity(defaultList));
  return (
    <div className="App">
      <header className="App-header">
        {/*  '***********'  */}
        <table striped bordered hover>
          <thead>
            <tr>
              <th>picture</th>
              <th>Name</th>
              <th>popularity</th>
              <th>wonOscar</th>
              <th>wonEmmy</th>
            </tr>
          </thead>
          <tbody>
            {slContact.map(per =>
              <tr key={per.id}>
                <td ><img style={{ width: '100px' }} src={per.pictureUrl} alt="kein foto"></img></td>
                <td>{per.name}</td>
                <td>{per.popularity.toFixed(2)}</td>
                <td>{per.wonOscar ? '🏆' : ' '}</td>
                <td>{per.wonEmmy ? '🏆' : ' '}</td>
                <td> <button onClick={() => {
                  setSlContact(
                    slContact.filter(p => p.id !== per.id)
                  )
                }} >delete</button></td>
              </tr>
            )}

          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">
                <button onClick={() => {
                  const randomNum = Math.floor(Math.random() * (contacts.length - 1))
                  const r = contacts.splice(randomNum, 1)
                  setSlContact(
                    sortListByNameAndPopularity([...slContact, ...r])
                  )
                }
                }>add</button>
              </td>
            </tr>
          </tfoot>
        </table>
        {/*  '***********'  */}

      </header>
    </div>
  );
}

export default App;


