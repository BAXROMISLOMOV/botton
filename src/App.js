import { useReducer, createContext } from "react";
import Links from "./Links/Links";
import MyRouter from "./Router/MyRoute";


const reducer = (state,action) => {
  switch(action.type) {
    case 'ADD_HODIM' :
      return {...state, dataHodim: [...state.dataHodim, action.payload]}
   
    case 'EDIT_HODIM' :
      let a = state.dataHodim
      a.forEach((item,index) => {
        if(item.id === action.payload.id){
           state.dataHodim.splice(index, 1,action.payload)
        }
      })
      return {...state, dataHodim: a}
    
      case 'DELETE_HODIM' :
        let b = state.dataHodim
        b.forEach((item,index) => {
          if(item.id === action.payload){
            state.dataHodim.splice(index, 1)
          }
        })
        return {...state, dataHodim: b}
    
      default:
        return state
  }
}


export const MyContext = createContext()

function App() {

  const [state,dispatch] = useReducer(reducer, {
    dataHodim: [
      {id: 1, name: 'John', lastName: 'Doe', phone: '99999', lavozim_id: 2, ilmiy_daraja_id: 1},
      {id: 2, name: 'Tom', lastName: 'Jerry', phone: '12345', lavozim_id: 1, ilmiy_daraja_id: 2},
    ],
    dataLavozim: [
      {id: 1, name: 'Developer', price: '1000$'},
      {id: 2, name: 'PM', price: '2000$'},
    ],
    dataDaraja: [
      {id: 1, name: 'Middle', bonus: '5%'},
      {id: 2, name: 'Junior', bonus: '2%'}
    ]
  })
  console.log(state.dataHodim);

  return (
    <div className="container">

      <Links />

      <MyContext.Provider value={{
        dataHodim: state.dataHodim,
        dataLavozim: state.dataLavozim,
        dataDaraja: state.dataDaraja,
        dispatch,
      }}>
          <MyRouter />
      </MyContext.Provider>
      
    </div>
  );
}

export default App;
