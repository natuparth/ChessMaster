import './grid.css'
import React, {  Fragment, useEffect, useState } from 'react';
import { findPossibleMoves, makeAMove ,checkForKingChecked,checkForKingCheckmate } from './useUpdateGrid';
const _ = require('lodash')
const pieces = {
    black: {
        pawn: '\u265F',
        rook: '\u265C',
        knight: '\u265E',
        bishop: '\u265D',
        queen: '\u265B',
        king: '\u265A'
    },

    white: {
        pawn: '\u2659',
        rook: '\u2656',
        knight: '\u2658',
        bishop: '\u2657',
        queen: '\u2655',
        king: '\u2654'
    }
}
const samplecell = {
    coin: '',
    coinColor: '',
    isActive: false
}

const defaultClassArray = Array.from({ length: 64 }, () => '');

function Grid({ coinPositions, player1, player2 }){
    const [timerState, setTimer] = useState({sec: 0, min: 0})
    const [coinSelected, setcoinSelected] = useState(samplecell);
    const [cellSelected, setcellSelected] = useState([]);
    let item = []
    const [chance, setChance] = useState('white')
    const [checkFlag, setCheckFlag] = useState('false')
    const [checkmateFlag, setCheckmateFlag] = useState('false')
    const [whiteDead, setWhiteDead] = useState([]);
    const [blackDead, setBlackDead] = useState([]);
    const [classArray, setClassArray] = useState(defaultClassArray);

    //populating initial layout with the cell values

    const [cellDetails, setCellDetails] = useState(coinPositions);
    useEffect(()=> {
        if(checkFlag==true){
            if(checkmateFlag==true){
                alert('haha ! you have no more moves, i won')
                setCellDetailsHandler(coinPositions)
                setCheckmateFlag(false)
            }
            else
            alert('haha macha! your king is under threat');
            setCheckFlag(false)
          }
      let timer = setInterval(()=>{
          setTimer((prev) => {
            if(prev.sec >= 60)
              return { sec:0, min: prev.min +1}
            else  
              return { sec:prev.sec+1, min: prev.min}
          })
      },1000)
      return () => clearInterval(timer)
    })
    // useEffect(() => {
    // if(classArray[0]=='checked'){
    //     alert('haha macha! your king is under threat');
    //   }
    // },chance);
let initialColor = "black"
    for (let i = 0; i < 8; i++) {
        let row = CreateRow(initialColor, i, cellDetails)
        initialColor = initialColor === "black" ? "white" : "black";
        item.push(...row);
    }

    const setCellDetailsHandler = (cellDetails) => {
        setCellDetails(cellDetails);
      }
    const setCoinSelectedHandler = (coin) => setcoinSelected(coin);
    const setCellSelectedHandler = (cell) => setcellSelected(cell);
    const setChanceHandler = (chance) => setChance(chance);
    const setClassArrayHandler = (classArray1) => { 
        setClassArray(classArray1)
    };
    const setWhiteDeadHandler = (wDead) => setWhiteDead(wDead);
    const setBlackDeadHandler = (bDead) => setBlackDead(bDead);
  
  function cellSelector(e,r,c) {
    var tempcellDetails =[];
    var temp=[]
    for(let i=0;i<8;i++)
    {     tempcellDetails[i] = [];
         for(let j=0;j<8;j++){
             tempcellDetails[i][j] = Object.assign({}, cellDetails[i][j]);
             temp[i*8+j]=''
             }
    }
    if(!cellDetails[r][c].isActive){
        if(cellDetails[r][c].coin === '')
          return;
     
      if(cellDetails[r][c].coinColor==chance){
        setCoinSelectedHandler(cellDetails[r][c])
        setCellSelectedHandler(a=>[r]);
        setCellSelectedHandler(a=>[...a,c]);
        setCellDetailsHandler(findPossibleMoves([...tempcellDetails],r,c))
      }
  }
  else{
      
      if(cellDetails[r][c].coinColor === coinSelected.coinColor){
        tempcellDetails.forEach(elem => elem.forEach(e => e.isActive = false))
        setCellDetailsHandler(tempcellDetails.map(elem => elem.map(e => { return{ ...e, isActive:false}})))
      }
   else if(tempcellDetails[r][c].coinColor!=tempcellDetails[Number(cellSelected[0])][Number(cellSelected[1])].coinColor){
        //setChanceHandler(chance=='white'?'black':'white')
        setCoinSelectedHandler(samplecell)
       let [resultLayout,killedCoin, movePlayed] = makeAMove([...tempcellDetails],r,c,cellSelected,coinSelected)
       setCellDetailsHandler(resultLayout);
       if(killedCoin.coinColor=='white'){
       setWhiteDeadHandler(a=>[...a,killedCoin])
       }
       else if(killedCoin.coinColor=='black'){
       setBlackDeadHandler(a=>[...a,killedCoin])
       }
       let temporary = [];
        for(let i=0;i<8;i++)
       {
          temporary[i] = [];
           for(let j=0;j<8;j++){
             temporary[i][j] = Object.assign({}, resultLayout[i][j]);
            }
       }
       let temporary1 = [];
        for(let i=0;i<8;i++)
       {
          temporary1[i] = [];
           for(let j=0;j<8;j++){
             temporary1[i][j] = Object.assign({}, resultLayout[i][j]);
            }
       }
       if(movePlayed){
        const checkFlag = checkForKingChecked(temporary, chance==='white'?'black':'white')
        // const checkmateFlag = checkForKingCheckmate(temporary1,chance)
        if(checkFlag === true)
          {
            setCheckFlag(true)
            const checkmateFlag1 = checkForKingCheckmate(temporary1,chance)
            if(checkmateFlag1 === true)
          {
            setCheckmateFlag(true)
          }
          }
          
          
         setChanceHandler(chance=='white'?'black':'white');
            }
    }
      //alert(tempcellDetails[r][c].coinColor+tempcellDetails[Number(cellSelected[0])][Number(cellSelected[1])].coinColor)
}
for(let i=0;i<8;i++){
for(let j=0;j<8;j++){
  if (tempcellDetails[i][j].isActive) {
      if (tempcellDetails[i][j].coinColor === "")
          temp[i * 8 + j] = "elementSelected "
      else
          temp[i * 8 + j] = "coinToPlay"
  }
}
}

setClassArrayHandler(temp);
}

function CreateRow(firstCellColor, rowNum, cellDetails){
  let color=firstCellColor;
  let row = [];
  for (let j = 0; j < 8; j++) {
            let classN = "cell " + (color === "black" ? "white" : "black");
            row.push(<div key={_.uniqueId()} className={classN} onClick={(e) => cellSelector(e, rowNum, j)}> <div className={classArray[rowNum * 8 + j]} ></div><p>
                {
                    pieces[cellDetails[rowNum][j].coinColor] ?
                        pieces[cellDetails[rowNum][j].coinColor][cellDetails[rowNum][j].coin] : ''

                }

            </p></div>)
            color = color === "black" ? "white" : "black";
        }
        return row; 
}

      
    return(
      <Fragment>
     
      <div className="player">
       <div className="nameHeader">{player1}</div>
       <div className="coinsDead">
        {
          blackDead.map((item)=>(
           <div className="dead">{pieces['black'][item.coin]}</div>
          ))
        }

      </div>
      </div>  
      <div className="wrapper">
      <div className="timer">  
      {timerState.min}:{timerState.sec}
      </div> 
      <div className="boardContainer"> 
      
      {item}
      </div>
      </div>
      <div className="player">
       <div className="nameHeader">{player2}</div>
       <div className="coinsDead">
       {
          whiteDead.map((item)=>(
           <div className="dead">{pieces.white[item.coin]}</div>
          ))
        }
      </div>
      </div>  
      </Fragment>

    )
}

export default Grid;
