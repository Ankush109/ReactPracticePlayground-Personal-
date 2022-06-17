// import './App.css';
// import ComponentC from './ComponentC';
// import React from 'react';
// import ComponentB from './ComponentB';
// import ComponentA from './ComponentA';
// import Usereducer from './usereducer';
// import Countertwo from './countertwo';
// import Counterthree from './Counterthree';
// import CompA from './CompA';
// import CompB from './CompB';
// import CompC from './CompC';
// import { useReducer } from 'react';
// export const Usercontext = React.createContext()
// export const Channelcontext = React.createContext()
// export const Countcontext = React.createContext()
// const initialstate = 0
// const reducer = (state, action) => {
//   // return newstate
//   switch (action) { // step 2
//     case 'increament':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialstate
//     default:
//       return state
//   }
// }
// function App() {
//   const [count, dispatch] = useReducer(reducer, initialstate)
//   return (
//     <Countcontext.Provider value={{ countstate: count, countdispatch: dispatch }}>
//       <div className="App">
//         {/* <Usercontext.Provider value={'ankush'}>
//         <Channelcontext.Provider value={"utpal das"}> 
//         <ComponentA/>
//         </Channelcontext.Provider>
//       </Usercontext.Provider> */}
//         Count - {count}
//         <CompA />
//         <CompB />
//         <CompC />
//       </div>
//     </Countcontext.Provider>
//   );
// }

// export default App;
import React from 'react'
import Datafetching1 from './Datafetching1'
import Datafetching2 from './Datafetching2'

function App() {
  return (
    // <div><Datafetching1/></div>
    <div>
      <Datafetching2/>
    </div>
  )
}

export default App