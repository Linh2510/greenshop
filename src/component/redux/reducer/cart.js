import { object } from "prop-types";

const initialState = {
     cart : [
        {
            id:1,
            name: "Cây dừa nhỏ",
            price: 250000,
            pricesale:200000,
            img: 'spx2-1.png'
            // qty:1
        },
        {
            id:2,
            name:"san pham b",
            price: 250000,
            pricesale:200000,
            img: 'spx2-2.png'
        },
        {
            id:3,
            name:"san pham c",
            price:150000,
            pricesale:100000,
            img: 'spx2-3.png'
        }
       
    ],
    listCart:[],
    dem:0,
    
}
const addToCart = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TO_CART': {
            let updateCart = localStorage.getItem("listCart") ? JSON.parse(localStorage.getItem("listCart")) : state.listCart;
            let index = updateCart.findIndex(item => item.id === action.payload.id );
            let sl = localStorage.getItem("dem") ? JSON.parse(localStorage.getItem("dem")) : state.dem;
            if(index !== -1 ) {
                updateCart[index].qty += 1;
            }
            else{
                updateCart.push(action.payload)
                sl = sl + 1; 
                state.dem = sl;
                localStorage.setItem("dem",JSON.stringify(state.dem));
            }
            
            state.listCart = updateCart;
            localStorage.setItem("listCart",JSON.stringify(state.listCart)); 
            return {
                ...state,
                dem : sl,
            }
        }
        case 'INCREMENT' : {
            let updateCart = JSON.parse(localStorage.getItem("listCart"))
            let index = updateCart.findIndex(item => item.id === action.payload.id );
            updateCart[index].qty += 1;
            state.listCart = updateCart;
            localStorage.setItem("listCart",JSON.stringify(state.listCart));
            return {...state}
        }
        case 'DECREMENT': {
            let updateCart = JSON.parse(localStorage.getItem("listCart"))
            let index = updateCart.findIndex(item => item.id === action.payload.id );
            updateCart[index].qty -= 1;
            state.listCart = updateCart;
            localStorage.setItem("listCart",JSON.stringify(state.listCart));
            return {...state}
        }
        case 'DELETE':{
            let sl = localStorage.getItem("dem") ? JSON.parse(localStorage.getItem("dem")) : 0;
            if(sl > 0){
                sl = JSON.parse(sl) - 1
            }
            let updateCart = JSON.parse(localStorage.getItem("listCart"))
            let fil = updateCart.filter(item => item.id !== action.payload.id);
            localStorage.setItem("listCart",JSON.stringify(fil));
            
            state.dem = sl
            console.log(state.dem)
            localStorage.setItem("dem",JSON.stringify(state.dem));
            return {
                ...state,
                dem:sl,
                listCart: fil,
            }
        }
        default:
            return state;
    }
    
}
export default addToCart;