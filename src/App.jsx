import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)

  const fetchData = () => {
    // Simulasi fetch data
    setData([1, 2, 3, 4, 5])
  }

  return (
    <div className="App">
      <h1>React App for CI/CD Demo</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        
        <button onClick={fetchData} style={{ marginLeft: '10px' }}>
          Fetch Data
        </button>
      </div>

      {data && (
        <div className="data">
          <h3>Data:</h3>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App