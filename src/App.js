import React, { useEffect } from 'react'
import Pagination from './container/Pages/Pagination'
import Search from './container/Pages/Search'
import Stories from './container/Pages/Stories'
// import { fetchProducts } from './container/redux/slices/ProductSlice'
// import { useDispatch} from 'react-redux';

const App = () => {

  // const dispatch= useDispatch();


  // useEffect(()=>{
  //   dispatch(fetchProducts());
  // },[]);


  return (
    <>
      <div className='container-fluid pt-5 pb-5 news_wrapper'>
        <h1 className='text-primary position_fix'><marquee width="100%" direction="right" height="100px">
          News-Tech-App
        </marquee> </h1>
        <div className='row'>
          <div className='col-md-8 col-12 mx-auto bg-white p-5 rounded '>

            <Search />
            {/* <Pagination/> */}
            <Stories />

          </div>
        </div>
      </div>
    </>

  )
}

export default App