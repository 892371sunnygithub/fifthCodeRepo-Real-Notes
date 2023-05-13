import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { nextPage, prevPage, searchQuery } from '../redux/slices/ProductSlice';

const Search = () => {
  const dispatch=useDispatch();
  const {nbPages, page, query}= useSelector((state)=> state.product);
  
  const getNextPage=()=>{
    
    dispatch(nextPage());
  };

  const getPrevPage=()=>{
    
    dispatch(prevPage());
  }

  const searchPost=(value)=>{
    dispatch(searchQuery(value))
  }
  return (
    <>
        <div className='text-center'>
           <h2>Tech News On The Go</h2>
           <form onSubmit={(e)=>e.preventDefault(e)}>
            <input type="text" placeholder='Search here' value={query} onChange={(e)=>searchPost(e.target.value)} className='form-control'  />
           </form>
           <div className='mt-3 mb-3'>
              <button className='btn  btn-sm bg-dark text-white me-5' onClick={()=>getPrevPage()} >Prev</button>

              <span>{page+1} of {nbPages} </span>
              <button className='btn  btn-sm bg-dark text-white ms-5' onClick={()=>getNextPage()}>Next</button>
           </div>
        </div>
    </>
  )
}

export default Search