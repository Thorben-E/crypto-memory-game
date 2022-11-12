import { useEffect, useState } from 'react'
import './App.css'
import bitcoin from './assets/bitcoin.png'
import bnb from './assets/bnb.png'
import cardano from './assets/cardano.png'
import dai from './assets/dai.png'
import doge from './assets/dogecoin.png'
import eth from './assets/ethereum.png'
import polkadot from './assets/polkadot.png'
import polygon from './assets/polygon.png'
import tether from './assets/tether.svg'
import xrp from './assets/xrp.png'
import sol from './assets/solana.png'
import ltc from './assets/litecoin.png'

function App() {

  const [score, setScore] = useState(0)
  const [SelectedArray, setSelectedArray] = useState([])
  const [bestScore, setBestScore] = useState(0)
  const [cardArray, setCardArray] = useState([
    {
      img: bitcoin,
      name: 'Bitcoin'
    },
    {
      img: eth,
      name: 'Ethereum'
    },
    {
      img: bnb,
      name: 'Bnb'
    },
    {
      img: cardano,
      name: 'Cardano' 
    },
    {
      img: dai,
      name: 'Dai' 
    },
    {
      img: polkadot,
      name: 'Polkadot'
    },
    {
      img: polygon,
      name: 'Polygon'
    },
    {
      img: tether,
      name: 'Tether' 
    },
    {
      img: xrp,
      name: 'Xrp'
    },
    {
      img: doge,
      name: 'Doge'
    },
    {
      img: ltc,
      name: 'Litecoin'
    },
    {
      img: sol,
      name: 'Solana'
    }
  ])

  const handleOnClick = (e) => {
    //chech for GAMEOVER
    SelectedArray.forEach(item => {
      // if card === item - game over
      if (item === e.target.id) {
        console.log('gameover')
        setScore(0)
        setSelectedArray([])
      }
    })
    //save card in selected array
    setSelectedArray(current => [...current, e.target.id])

    //shuffle cardArray
    setCardArray(shuffle(cardArray))

    //score + 1
    setScore(score+1)
  }

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
    }
  })

  const GAMEOVER = () => {
    
  }

  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <div className="App">
      <h2>Crypto memory game</h2>
      <p>Score: {score}</p>
      <p>Best score: {bestScore}</p>
      <ul>{cardArray.map((card) => (
        <li key={card.name} id={card.name} className="card" onClick={handleOnClick}>
          <p id={card.name}>{card.name}</p>
          <img src={card.img} id={card.name} className="logo" alt="it did no load :(" />
        </li>
      ))}</ul>
    </div>
  )
}

export default App
