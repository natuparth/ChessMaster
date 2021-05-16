//import {useEffect, useState} from 'react';
const samplecell = {
    coin: '',
    coinColor: '',
    isActive: false
  }


export function findPossibleMoves(tempcellDetails,r,c, chance){
  
  
           //   = cellDetails.map((elem)=>elem.slice(0));

        tempcellDetails.forEach((cell) => {
          cell.forEach((data) => {
            data.isActive = false
          });
        })
        tempcellDetails[r][c].isActive = true;
        //coin condition
        var i=0;
        switch (tempcellDetails[r][c].coin) {
          case 'rook': {
            for (let i = 1; i < 8; i++) {
              if (c + i < 8) {
                if (tempcellDetails[r][c + i].coin === '') 
                  tempcellDetails[r][c + i].isActive = true;
                
                else if (tempcellDetails[r][c + i].coin !== '' && tempcellDetails[r][c + i].coinColor !== tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r][c + i].isActive = true;
                  break;
                }
                else 
                  break;
                
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c - i >= 0) {
                if (tempcellDetails[r][c - i].coin=== '') {
                  tempcellDetails[r][c - i].isActive = true;
                }
                else if (tempcellDetails[r][c - i].coin !=='' && tempcellDetails[r][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r][c - i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (r + i < 8) {
                if (tempcellDetails[r + i][c].coin=== '') {
                  tempcellDetails[r + i][c].isActive = true;
                }
                else if (tempcellDetails[r + i][c].coin !=='' && tempcellDetails[r + i][c].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r + i][c].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (r - i >= 0) {
                if (tempcellDetails[r - i][c].coin=== '') {
                  tempcellDetails[r - i][c].isActive = true;
                }
                else if (tempcellDetails[r - i][c].coin !=='' && tempcellDetails[r - i][c].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r - i][c].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
          
            break;
          }
          case 'knight': 
            if (r + 2 < 8 && c + 1 < 8 && tempcellDetails[r + 2][c + 1].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r + 2][c + 1].isActive = true;
            
            if (r + 2 < 8 && c - 1 >= 0 && tempcellDetails[r + 2][c - 1].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r + 2][c - 1].isActive = true;
            
            if (r - 2 >= 0 && c + 1 < 8 && tempcellDetails[r - 2][c + 1].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r - 2][c + 1].isActive = true;
            
            if (r - 2 >= 0 && c - 1 >= 0 && tempcellDetails[r - 2][c - 1].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r - 2][c - 1].isActive = true;
            
            if (r + 1 < 8 && c + 2 < 8 && tempcellDetails[r + 1][c + 2].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r + 1][c + 2].isActive = true;
            
            if (r - 1 >= 0 && c + 2 < 8 && tempcellDetails[r - 1][c + 2].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r - 1][c + 2].isActive = true;
            
            if (r + 1 < 8 && c - 2 >= 0 && tempcellDetails[r + 1][c - 2].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r + 1][c - 2].isActive = true;
            
            if (r - 1 >= 0 && c - 2 >= 0 && tempcellDetails[r - 1][c - 2].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r - 1][c - 2].isActive = true;
            
          
            break;
          case 'bishop': {
            for (let i = 1; i < 8; i++) {
              if (c + i < 8 && r + i < 8) {
                if (tempcellDetails[r + i][c + i].coin=== '') {
                  tempcellDetails[r + i][c + i].isActive = true;
                }
                else if (tempcellDetails[r + i][c + i].coin !=='' && tempcellDetails[r + i][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r + i][c + i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let m = 1; m < 8; m++) {
              if (c - m >= 0 && r + m < 8) {
                if (tempcellDetails[r + m][c - m].coin=== '') {
                  tempcellDetails[r + m][c - m].isActive = true;
                }
                else if (tempcellDetails[r + m][c - m].coin !=='' && tempcellDetails[r + m][c - m].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r + m][c - m].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c + i < 8 && r - i >= 0) {
                if (tempcellDetails[r - i][c + i].coin=== '') {
                  tempcellDetails[r - i][c + i].isActive = true;
                }
                else if (tempcellDetails[r - i][c + i].coin !=='' && tempcellDetails[r - i][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r - i][c + i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c - i >= 0 && r - i >= 0) {
                if (tempcellDetails[r - i][c - i].coin=== '') {
                  tempcellDetails[r - i][c - i].isActive = true;
                }
                else if (tempcellDetails[r - i][c - i].coin !=='' && tempcellDetails[r - i][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r - i][c - i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
          
            break;
          }
          case 'queen': 
            for (let i = 1; i < 8; i++) {
              if (c + i < 8) {
                if (tempcellDetails[r][c + i].coin=== '') {
                  tempcellDetails[r][c + i].isActive = true;
                }
                else if (tempcellDetails[r][c + i].coin !=='' && tempcellDetails[r][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r][c + i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c - i >= 0) {
                if (tempcellDetails[r][c - i].coin=== '') {
                  tempcellDetails[r][c - i].isActive = true;
                }
                else if (tempcellDetails[r][c - i].coin !=='' && tempcellDetails[r][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r][c - i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (r + i < 8) {
                if (tempcellDetails[r + i][c].coin=== '') {
                  tempcellDetails[r + i][c].isActive = true;
                }
                else if (tempcellDetails[r + i][c].coin !=='' && tempcellDetails[r + i][c].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r + i][c].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (r - i >= 0) {
                if (tempcellDetails[r - i][c].coin=== '') {
                  tempcellDetails[r - i][c].isActive = true;
                }
                else if (tempcellDetails[r - i][c].coin !=='' && tempcellDetails[r - i][c].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r - i][c].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c + i < 8 && r + i < 8) {
                if (tempcellDetails[r + i][c + i].coin=== '') {
                  tempcellDetails[r + i][c + i].isActive = true;
                }
                else if (tempcellDetails[r + i][c + i].coin !=='' && tempcellDetails[r + i][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r + i][c + i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c - i >= 0 && r + i < 8) {
                if (tempcellDetails[r + i][c - i].coin=== '') {
                  tempcellDetails[r + i][c - i].isActive = true;
                }
                else if (tempcellDetails[r + i][c - i].coin !=='' && tempcellDetails[r + i][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r + i][c - i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c + i < 8 && r - i >= 0) {
                if (tempcellDetails[r - i][c + i].coin=== '') {
                  tempcellDetails[r - i][c + i].isActive = true;
                }
                else if (tempcellDetails[r - i][c + i].coin !=='' && tempcellDetails[r - i][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r - i][c + i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c - i >= 0 && r - i >= 0) {
                if (tempcellDetails[r - i][c - i].coin=== '') {
                  tempcellDetails[r - i][c - i].isActive = true;
                }
                else if (tempcellDetails[r - i][c - i].coin !=='' && tempcellDetails[r - i][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r - i][c - i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
          
            break;
          case 'king': 
            const i = 1;
            if (c + i < 8 && tempcellDetails[r][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r][c + i].isActive = true;
            }
            if (c - i >= 0 && tempcellDetails[r][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r][c - i].isActive = true;
            }
            if (r + i < 8 && tempcellDetails[r + i][c].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r + i][c].isActive = true;
            }
            if (r - i >= 0 && tempcellDetails[r - i][c].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r - i][c].isActive = true;
            }
            if (c + i < 8 && r + i < 8 && tempcellDetails[r + i][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r + i][c + i].isActive = true;
            }
            if (c - i >= 0 && r + i < 8 && tempcellDetails[r + i][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r + i][c - i].isActive = true;
            }
            if (c + i < 8 && r - i >= 0 && tempcellDetails[r - i][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r - i][c + i].isActive = true;
            }
            if (c - i >= 0 && r - i >= 0 && tempcellDetails[r - i][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r - i][c - i].isActive = true;
            }
          
            break;
          case 'pawn': 
            if (tempcellDetails[r][c].coinColor=== 'white') {
              if (r=== 6 && tempcellDetails[r - 2][c].coinColor=== '')
                tempcellDetails[r - 2][c].isActive = true
              if (r - 1 >= 0 && tempcellDetails[r - 1][c].coinColor=== '')
                tempcellDetails[r - 1][c].isActive = true
              if (r - 1 >= 0 && c + 1 < 8 && tempcellDetails[r - 1][c + 1].coinColor=== 'black')
                tempcellDetails[r - 1][c + 1].isActive = true
              if (r - 1 >= 0 && c - 1 >= 0 && tempcellDetails[r - 1][c - 1].coinColor=== 'black')
                tempcellDetails[r - 1][c - 1].isActive = true
            }
            else {
              if (r=== 1 && tempcellDetails[r + 2][c].coinColor=== '')
                tempcellDetails[r + 2][c].isActive = true
              if (r + 1 < 8 && tempcellDetails[r + 1][c].coinColor=== '')
                tempcellDetails[r + 1][c].isActive = true
              if (r + 1 < 8 && c + 1 < 8 && tempcellDetails[r + 1][c + 1].coinColor=== 'white')
                tempcellDetails[r + 1][c + 1].isActive = true
              if (r + 1 < 8 && c - 1 >= 0 && tempcellDetails[r + 1][c - 1].coinColor=== 'white')
                tempcellDetails[r + 1][c - 1].isActive = true
            }
          
            break;
          default:
        }

    return tempcellDetails;
         
         
}

  export const makeAMove = (tempcellDetails, r, c, cellSelected, coinSelected) => {
    
        let temporary = [];
        let killedCoin=samplecell
        for(let i=0;i<8;i++)
       {
          temporary[i] = [];
           for(let j=0;j<8;j++){
             temporary[i][j] = Object.assign({}, tempcellDetails[i][j]);
            }
       }
        temporary[Number(cellSelected[0])][Number(cellSelected[1])] = samplecell
        temporary[r][c] = coinSelected;
        const checkFlag = checkForKingChecked(temporary, coinSelected.coinColor)
        if(checkFlag === true)
          {
            alert('how dare you macha! your king is under threat');
          }
        else{
             tempcellDetails[Number(cellSelected[0])][Number(cellSelected[1])] = samplecell
             killedCoin=tempcellDetails[r][c]
             tempcellDetails[r][c] = coinSelected
        }
        

        tempcellDetails.forEach((cell) => {
          cell.forEach((data) => {
            data.isActive = false
          });
        })
      return [tempcellDetails,killedCoin, !checkFlag];
  }



  export const checkForKingChecked = (boardLayout, color) => {
     let flag = false;
     let colorToCheck = color === 'white' ? 'black' : 'white';
    //  let colorToCheck = color
     var [x,y] = findKingPosition(boardLayout, color)
     for(let i=0;i<8;i++){
       for(let j=0;j<8;j++){
         if(boardLayout[i][j].coinColor === colorToCheck)
          {
             let tempArray = findPossibleMoves([...boardLayout], i, j);
             if(tempArray[x][y].isActive === true)
               {
                 flag = true;
                 break;
               } 
          }
       }
     }
      return flag;
  }

  const findKingPosition = (boardLayout, color) => {
    var x, y;
    for(let i=0;i<8;i++)
      for(let j=0;j<8;j++)
         if(boardLayout[i][j].coin === "king" && boardLayout[i][j].coinColor === color)
             [x, y] = [i, j];     
      
    return [x,y];

  }

  export const checkForKingCheckmate=(boardLayout,color) => {
      
    let colorToCheck = color === 'white' ? 'black' : 'white';
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
          if(boardLayout[i][j].coinColor === colorToCheck)
           {
              let tempArray = findPossibleMoves([...boardLayout], i, j);
              for(let k=0;k<8;k++){
                for(let l=0;l<8;l++){
                    if((k!=i || l!=j) && tempArray[k][l].isActive==true && tempArray[k][l].coin!='king'){
                        let temporary = [];
                          for(let m=0;m<8;m++)
                             {
                               temporary[m] = [];
                               for(let n=0;n<8;n++){
                                   temporary[m][n] = Object.assign({}, tempArray[m][n]);
                                 }
                              }
                              temporary[k][l]=temporary[i][j]
                              temporary[i][j]=samplecell;
                        const checkFlag = checkForKingChecked(temporary, colorToCheck)
                        if(checkFlag==false){
                            return false;
                        }
                    }
                }
            }
           }
        }
      }
      return true;
  }