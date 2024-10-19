import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px',height:'80vh'}} className='flex justify-center items-center flex-col'>
        <h1 className='text-5xl font-bold'>404</h1>
        <img width={'300px'} style={{height:'200px'}} src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
        <h1 className='text-4xl font-bold mb-2'>Looks like you're lost.</h1>
        <p className='mb-2'>The page you are looking for is not available</p>
        <Link to={'/'} className='bg-green-600 p-2 text-white rounded'>Home</Link>
      </div>
    </>
  )
}

export default Pnf