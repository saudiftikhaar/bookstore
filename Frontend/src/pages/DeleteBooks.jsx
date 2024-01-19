import React, {useState} from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/spinner';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

const DeleteBooks = () => {
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const {id}=useParams();

  const handeleDeleteBook=()=>{
    setLoading(true);
    axios
        .delete(`http://localhost:5555/books/${id}`)
        .then(()=>{
          setLoading(false)
          navigate('/')
        })
        .catch((error)=>{
          setLoading(false);
          alert("An error happened.Please check the console");
          console.log(error);
         }) 
  }





  return (
   <div>
     <div className='pt-4 p'>
      <BackButton />
      <h1 className='fs-4 pt-2'>Delete Book</h1>
      {loading ? <Spinner />:''}
    <div className='d-flex flex-column text-center  border border-2 border-secondary rounded-pill p-4 pt-6 w-50 mx-auto'>
      <h4 className='fs-4'>Are You Sure You Want to Delete this Book</h4>
      <button className='col-4 text-light mx-auto mt-4 bg-danger py-2 fs-2 rounded-pill' onClick={handeleDeleteBook}>Yes,Delete it</button>
    </div>
    </div>
   </div>
  ) 
}

export default DeleteBooks