import React from 'react';
import styles from './styles.css'

function App() {



  return (
    <div className="App">
      <table className = 'board'>
        <tbody>
          <tr>
            <th className = 'title' colSpan = '4'>Memory</th>
          </tr>
          <tr>
            <td className = 'card face-down'></td>
            <td className = 'card'></td>
            <td className = 'card'></td>
            <td className = 'card'></td>
          </tr>
          <tr>
            <td className = 'card'></td>
            <td className = 'card'></td>
            <td className = 'card'></td>
            <td className = 'card'></td>
          </tr>
          <tr>
            <td className = 'card'></td>
            <td className = 'card'></td>
            <td className = 'card'></td>
            <td className = 'card'></td>
          </tr>
        </tbody>
      </table>

      <div className = 'button-div'>
        <button className = 'button'>Start Over</button>
      </div>


    </div>
  );
}

export default App;
