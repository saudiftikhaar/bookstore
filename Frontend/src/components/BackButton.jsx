import React from 'react';
import {BsArrowLeft} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div className='d-flex'>
        <Link to={'/'} className='bg-success text-light rounded col-1'>
            <BsArrowLeft className='w-75'></BsArrowLeft>
        </Link>
    </div>
  )
}

export default BackButton