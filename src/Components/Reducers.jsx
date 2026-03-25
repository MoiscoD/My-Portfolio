// //Action

// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement, increaseByvalue } from '../state/counterslice'




// const Homepage = () => {
//   const [number, setnumber] = useState(0)
//   const count = useSelector(state => state.counter.count)
//   console.log(count)

//   let dispatch = useDispatch()
//   return (
//     <div>
//         <h1>Homepage is here</h1>
//         <h1>Count is {count} </h1>
//         <input type="text" placeholder='Enter your number' onChange={(e)=>setnumber(e.target.value)} />
//         <button onClick={()=>dispatch(increment())}>increase Count</button>
//        <button onClick={()=>dispatch(decrement())}>decrease Count</button>
//         <button onClick={()=>dispatch(increaseByvalue(Number(number)))}>Increase By user Number</button>
//     </div>
//   )
// }

// export default Homepage






// //reducer
// import { createSlice } from "@reduxjs/toolkit";

// export const counterSlice = createSlice({
//     name:"counter",
//     initialState: {
//         count: 10,
//         allStudent: ["Olarenwaju"]
//     },
//     reducers:{
//         increment: (state)=>{
//             // console.log(state)
//             state.count++
//         },
//         decrement: (state)=>{
//             console.log(state.count)
//             state.count--
//         },
//         increaseByvalue: (state,actions) =>{
//             console.log(state.count)
//             console.log(actions.payload)
//             state.count += actions.payload
//         }
//     }

// })
// export const {increment, decrement, increaseByvalue} = counterSlice.actions
// export default counterSlice.reducer






// //store

// import { configureStore } from "@reduxjs/toolkit";
// import  counterSlice  from "./state/counterslice";


//  export const store = configureStore({
//     reducer:{
//         counter: counterSlice
//     }
//  })