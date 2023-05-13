import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { STATUSES } from '../redux/slices/ProductSlice';
import { storyRemove, setStatus,setProducts } from '../redux/slices/ProductSlice';

let Api= "http://hn.algolia.com/api/v1/search?";
const Stories = () => {
    const dispatch= useDispatch();
    const {data, status, query, page}=useSelector((state)=>state.product);
    
    
    const handleRemove=(objectID)=>{
      dispatch(storyRemove(objectID));
    }

   const FetchData=async(url)=>{
    dispatch(setStatus(STATUSES.LOADING));
    try {
        const res= await fetch(url);
        const data= await res.json();
        dispatch(setProducts(data));
        
        dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
        console.log(error);
        dispatch(setStatus(STATUSES.ERROR))
    }
   }
   
   useEffect(()=>{
    FetchData(`${Api}query=${query}&page=${page}`);
  }, [query, page]);


  const load=(
    <div className='loader_style text-center'>
    <div className="spinner-border"  role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow"  role="status">
       <span className="visually-hidden">Loading...</span>
     </div>
     </div>
  );

  if(status===STATUSES.LOADING){
    return load;
  }
 

  return (
    <>
      <div className='con_stroy'>
        {

          data.map((curElm, index)=>{
            const{title, author, objectID, url, num_comments}= curElm;
            return(
              <div className='inner_data' key={objectID}>
                <h2>{title} </h2>
                <p className='fw-bold'>
                  By <span>{author} | </span> <span>{num_comments} </span>
                  comments
                </p>

                <div className='card_btn'>
                  <a href={url} target="_blank">Read More</a>
                  <span  className='text-danger pointer' onClick={()=>handleRemove(objectID)}>Remove</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Stories