import './App.css';
import './grid/grid'
import Grid from './grid/grid';
import { useState } from 'react'

const useNameHook = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value)
  }
   return {
     name: name,
     onChange: handleChange
   }
}

function App() {
  const coins = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook']
  const coinPositions = [];
  const [gameStarted, setGameStarted] = useState(false);
  const name1 = useNameHook();
  const name2 = useNameHook();
  for (let i = 0; i < 8; i++) {
    coinPositions[i] = [];
    for (let j = 0; j < 8; j++) {
      if (i=== 0) {
        coinPositions[i][j] = {
          coin: coins[j],
          coinColor: 'black',
          isActive: false
        };
      }
      else if (i=== 1) {
        coinPositions[i][j] = {
          coin: 'pawn',
          coinColor: 'black',
          isActive: false
        };
      }
      else if (i=== 6) {
        coinPositions[i][j] = {
          coin: 'pawn',
          coinColor: 'white',
          isActive: false
        };
      }
      else if (i=== 7) {
        coinPositions[i][j] = {
          coin: coins[j],
          coinColor: 'white',
          isActive: false
        };
      }
      else {
        coinPositions[i][j] = {
          coin: '',
          coinColor: '',
          isActive: false
        };
      }
    }
  }
  return (
    <div className="container">
       {/* <Grid1></Grid1>  */}
       {
       !gameStarted ?
       <div className="header">
         <h1> Welcome to ChessMaster</h1>
         <div className="my-form">
           <input type="text" placeholder="Player 1" {...name1}/>
           <input type="text" placeholder="Player 2" {...name2}/>
         </div>
          <button className="learn-more" onClick={()=>{setGameStarted(true)}}>
           <span className="circle" aria-hidden="true">
           <span className="icon arrow"></span>
           </span>
           <span className="button-text">Play</span>
         </button> 
       </div> : ''
       }{
         gameStarted ?
       <Grid coinPositions={coinPositions} player1={name1.name} player2={name2.name}></Grid>
       : ' '}
    </div>
  );
}

export default App;
