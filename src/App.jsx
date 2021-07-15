import React from 'react';

function App(){
const cssStyle = { };

let greetings = '';
let curDate = new Date(2021,7,7,1);
curDate = curDate.getHours();

if(curDate >=1 && curDate <12){
  greetings = "Good Morning";
  cssStyle.color = "green";
}
else if(curDate >=12 && curDate <19)
{
  greetings = "Good Afternoon";
  cssStyle.color = "orange";
}
else{

  greetings = "Good Night";
  cssStyle.color = "black";
}

return(
    <>
    <div>
    <h1>Hello, <span style={cssStyle}>{greetings}</span></h1>
    </div>
    </>
);
}

export default App;

