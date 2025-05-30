import { useState } from "react";
function Square(){
  const [value, setValue] = useState(null);
  function handleClick(){
    setValue('X')
  }
return <button className="square" onClick={(handleClick)} >{value}</button>
}
export default function Board() {
  const [squares, Setsquares] = useState(Array(9).fill(null))
  return <>
 <div className="board-row">
    <Square {squares[1]} />
    <Square {squares[2]}  />
    <Square {squares[3]}  />
   </div>
   <div className="board-row">
    <Square {squares[4]} />
    <Square {squares[5]} />
    <Square {squares[6]} />
   </div>
   <div className="board-row">
    <Square {squares[7]} />
    <Square {squares[8]} />
    <Square {squares[9]} />
   </div>
   </>;
}
