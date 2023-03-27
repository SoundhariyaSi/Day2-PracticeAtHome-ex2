import React from 'react'
let count=0;

function Countchange()
{
    count++;
    alert("Hey!!You Clicked Button:"+count);
}
function MyButton() {
  return (
    <div>
        <button onClick={Countchange}>
            Button
        </button>
    </div>
  )
}

export default MyButton