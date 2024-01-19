import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../components/spinner';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';


const Home = () => {
    const [book, setBooks]=useState([]);
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        axios
             .get('http://localhost:5555/books')
             .then(response=>{
                setBooks(response.data.data);
                console.log(book);
                setLoading(false);
             })
             .catch((error)=>{
                console.log(error);
                setLoading(false);
             })
    },[]);



  return (
    <div className='container'>
      <div className='d-flex justify-content-between mt-5'>
        <h1>Book List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='fs-1' />
        </Link>
      </div>
      {loading ?(
        <Spinner />
      ) : (
        <table className='table table-bordered text-center border border-primary'>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publish Year</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {book.map((books, index)=>(
              <tr key={book._id} >
                <th scope='row'>
                  {index +1}
                </th>
                <td>
                  {books.title}
                </td>
                <td>
                  {books.author}
                </td>
                <td>
                  {books.publishYear}
                </td>
                <td>
                  <div className='d-flex justify-content  gap-3 ml-4'>
                    <Link to={`/books/details/${books._id}`}>
                      <BsInfoCircle className='text-info fs-5'/>
                    </Link>
                    <Link to={`/books/edit/${books._id}`}>
                      <AiOutlineEdit className='text-warning fs-5'/>
                    </Link>
                    <Link to={`/books/delete/${books._id}`}>
                      <MdOutlineDelete  className='text-danger fs-5'/>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home
