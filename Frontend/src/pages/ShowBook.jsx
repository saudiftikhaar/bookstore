import React,{useEffect, useState} from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import {useParams} from 'react-router-dom';
import Spinner from '../components/spinner';

const ShowBook = () => {
  const [books, setBooks]=useState({});
  const [loading, setLoading]=useState(false);
  const { id }=useParams();

useEffect(()=>{
  axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response)=>{
        setBooks(response.data)
        setLoading(false)
      })
      .catch((error)=>{
        console.log(error)
        setLoading(false)
      })
},[])


  return (
    <div className='container'>
      <div className='mt-4 mt-4'>
      <BackButton />
      <h1 className='fs-3'>Show Book</h1>
      </div>
      {loading ?(
        <Spinner />
        ):(
          <div className='d-flex flex-column border border-3 p-4 h-100 border-primary w-50 mt-4'>
            <div className='mb-3'>
              <span className='me-5 fs-4'>Id</span>
              <span>{books._id}</span>
            </div>
            <div  className='mb-3'>
              <span className='me-5 fs-4'>Title</span>
              <span>{books.title}</span>
            </div>
            <div  className='mb-3'>
              <span className='me-5 fs-4'>Publish Year</span>
              <span>{books.publishYear}</span>
            </div>
            <div  className='mb-3'>
              <span className='me-5 fs-4'>Create Time</span>
              <span>{new Date(books.createdAt).toString()}</span>
            </div>
            <div  className='mb-3'>
              <span className='me-5 fs-4'>Last Update Time</span>
              <span>{new Date(books.updatedAt).toString()}</span>
            </div>
          </div>
        )}
    </div>
  )
}

export default ShowBook