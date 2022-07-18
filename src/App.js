import React from "react";
import logo from './logo.svg';
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

// comment this out after completion and uncomment code below it to proceed
// function Child() {
//   return <div>This is children content</div>;
// }

  //Challenge: Uncomment this code to complete quiz

    function Child({ onValueUpdate }) {
  return (
    <>
      <div>Child


        <h5>Amazing tech space</h5>
      </div>
      <button>Change Parent Value</button>
      <button onClick={onValueUpdate}>Change Parent Value</button>
    </>
  );

}





function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"

  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child />
      </div>
    </>
  );
}


//Uncomment this to tackle quiz


// Comment out after completion
// function Parent() {
//  return (
//     <div>
//       <h3>Parent Component</h3>
//     </div>
//   );

// Comment above code after completion

function App() {
  
  const [toggle, setToggle] = React.useState(true);

  function toggleChange(){
  
    if (toggle===true){
      setToggle(false);
    }
    else{
      setToggle(true);
    }


  }

  const userList=users.map((user) =>{
    return <li key={user.id}>{user.name}</li>
  })
  return (
    
    <>
    <h1>JSX is cool!</h1>
    <img src="https://images.unsplash.com/photo-1564801720666-83b2d7a3de73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcnJ5JTIwc2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="App-logo" alt="logo" />
      <h3>User names</h3>
      <ul>{userList}</ul>
      <button onClick={toggleChange}>Hide Element Below</button>
      <div>{toggle? "Toggle Challenge":" "}</div>
      

      <div>Toggle Challenge</div>
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
