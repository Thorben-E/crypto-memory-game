import { useState } from 'react'
import './App.css'

function App() {

  const [score, setScore] = useState(0)
  const [cardArray, setCardArray] = useState([
    {
      name: 'Bitcoin',
      img: './assets/bitcoin.png'
    },
    {
      name: 'Ethereum',
      img: './assets/ethereum.png'
    },
    {
      name: 'Bnb',
      img: './assets/bnb.png'
    },
    {
      name: 'Cardana',
      img: './assets/cardano.png' 
    },
    {
      name: 'Dai',
      img: './assets/dogecoin.png' 
    },
    {
      name: 'Polkadot',
      img: './assets/polkadot.png'
    },
    {
      name: 'Polygon',
      img: './assets/polygon.png'
    },
    {
      name: 'Tether',
      img: './assets/tether.svg' 
    },
    {
      name: 'Xrp',
      img: './assets/xrp.png'
    },
    {
      name: 'Dogecoin',
      img: './assets/dogecoin.png'
    }
  ])

  return (
    <div className="App">
      <h2>Crypto memory game</h2>
      <p>Score: {score}</p>
    </div>
  )
}

export default App
