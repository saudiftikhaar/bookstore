import React,{useState, useEffect} from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBooks = () => {
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [publishYear,setPublishYear]=useState('');
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const {id}=useParams();

  useEffect(()=>{
    setLoading(true)
    axios
        .get(`http://localhost:5555/books/${id}`)
        .then((response)=>{
          setAuthor(response.data.author);
          setTitle(response.data.title);
          setPublishYear(response.data.publishYear);
          setLoading(false); 
        }) 
         .catch((error)=>{
          setLoading(false);
          alert("An error happened.Please check the console");
          console.log(error);
         }) 
  },[])

  const handleEditBook=()=>{
    const data={
      title,
      author,
      publishYear,
    }
    setLoading(true);
    axios 
        .put(`http://localhost:5555/books/${id}`,data)
        .then(()=>{
          setLoading(true);
          navigate('/')
        })
        .catch((error)=>{
          setLoading(false);
          alert("An error happened.Please check the console");
          console.log(error);
         }) 
  }



  return (
    <div className='ms-4'>
      <div className='row'>
        <div className='col-12 fs-4 mt-4'>
          <BackButton />
          <h1 >Create Book</h1>
        </div>
      </div>
      {loading ? <Spinner />:''}
      <div className='d-flex flex-column border border-2 border-secondary p-4 w-50 mx-auto'>
        <div className='mb-3'>
          <label className='fs-2 me-5'>Title</label>
          <input 
                type='text'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                className='border border-2 border-success px-3 w-full pt-2 pb-2 w-100'          
          />
        </div>
        <div className='mb-3'>
          <label className='fs-2 me-3'>Author</label>
          <input 
                type='text'
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                className='border border-2 border-success px-3 w-full pt-2 pb-2 w-100'          
          />
        </div>
        <div className='mb-3'>
          <label className='fs-2 me-3'>Publish Year</label>
          <input 
                type='number'
                value={publishYear}
                onChange={(e)=>setPublishYear(e.target.value)}
                className='border border-2 border-success pt-2 pb-2 w-100'          
          />
        </div>
        <button className='col-3 py-2 mx-auto' onClick={handleEditBook}>Save</button>
      </div>
    </div>
  )
}

export default EditBooks