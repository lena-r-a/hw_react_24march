import React from 'react'
import './App.css';
import {UserInfo} from './components/UserInfo'
// import {Title} from './components/Title'
// import {FormInput} from './components/FotmInput'

// const Title =()=>{
//   return(
//     <h1>Hello world</h1>
//   );
// };

const users = [
  {name: "Вова", gender: "муж", age:"27", workAge:"1"},
  {name: "Иван", gender: "муж", age:"21", workAge:"2"},
  {name: "Ольга", gender: "жен", age:"37", workAge:"3"}
]
export const App =()=>{
  return(
    <div>
      <UserInfo users={users}/>
    </div>
  );
}

// class FormInput extends React.Component{
//   render(){
//     return <input type="number" />
//   }
// }

// const Items = ()=>{return (
// <div>
//   <div>item</div>
//   <div>item</div>
//   <div>item</div>
//   <div>item</div>
//   </div>)
  
// }



// const getUser = ()=>({name: "Vova"});
// console.log(getUser());
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
