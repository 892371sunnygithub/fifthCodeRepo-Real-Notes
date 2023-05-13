import {createSlice} from '@reduxjs/toolkit';
// import axios from 'axios'
// let Api= "http://hn.algolia.com/api/v1/search?";
 export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading',
});
const initialState={
    
    query:"",
    nbPages:0,
    page:0,
    data:[],
    status:STATUSES.IDLE,
};

const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        setProducts(state, action){
           state.data=action.payload.hits;
           state.nbPages=action.payload.nbPages;
           
        },

        setStatus(state,action){
            state.status=action.payload;
        },

        storyRemove(state, action){
          
          state.data= state.data.filter((curElm)=>curElm.objectID !==action.payload);
        },

        nextPage(state, action){
            let pageInc=state.page+1;
            if(pageInc>=state.nbPages){
                pageInc=0;
            }
          state.page=pageInc;
        },

        prevPage(state, action){
          let pageNum=state.page;
          if(pageNum<=0){
            pageNum=0;
          } else{
            pageNum=pageNum-1;
          }
          state.page=pageNum;
        },

        searchQuery(state, action){
           state.query=action.payload;
        },
    }
})


export const {setProducts, setStatus, storyRemove, nextPage, prevPage, searchQuery}= productSlice.actions;
export default productSlice.reducer;


// Thunks

// export function fetchProducts(){
//     return async function fetchProductThunk(dispatch, getState){
//         // const state = getState();
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res= await fetch(`${Api}query=${getState.query}`);
//             const data= await res.json();
//             dispatch(setProducts(data));
            
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }


// https://api.pujakaitem.com/api/products
