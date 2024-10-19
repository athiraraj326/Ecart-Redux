import React from 'react'

const Footer = () => {
  return (
    <>
      <div style={{ height: '300px', marginTop: '100px' }} className='bg-blue-600 p-5 text-white'>
        <div className='flex justify-evenly p-5'>
          <div>
            <h1 className='text-2xl font-bold'><i className="fa-solid fa-truck-fast me-1"></i> E Cart</h1>
            <p className='mt-3'>Designed and built with all the love in the world by <br /> the Bootstrap team with the help of our contributors.</p>
            <p className='mt-2'>Code licensed MIT, docs CC BY 3.0.</p>
            <p className='mt-2'>Currently v5.3.3.</p>
          </div>
          <div>
            <h5 className='text-2xl font-bold'>Links</h5>
            <div className='flex flex-col mt-3'>
              <a href="">Home</a>
              <a href="">Cart</a>
              <a href="">Wishlist</a>
            </div>
          </div>
          <div>
            <h5 className='text-2xl font-bold'>Guides</h5>
            <div className='flex flex-col mt-3'>
              <a href="">React</a>
              <a href="">React Bootstrap</a>
              <a href="">Routing</a>
            </div>
          </div>
          <div>
            <h5 className='text-2xl font-bold'>Contact Us</h5>
            <div className='my-3'>
              <input type="text" className='rounded p-1' placeholder='Enter your email here' />
              <button className='btn ms-2 bg-yellow-500 py-1 px-2 text-white rounded'><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="flex justify-between">
              <a href="" target='_blank'><i className="fa-brands fa-twitter"></i></a>
              <a href="" target='_blank'><i className="fa-brands fa-instagram"></i></a>
              <a href="" target='_blank'><i className="fa-brands fa-facebook"></i></a>
              <a href="" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
              <a href="" target='_blank'><i className="fa-brands fa-github"></i></a>
              <a href="" target='_blank'><i className="fa-solid fa-phone"></i></a>
            </div>
          </div>
        </div>
        <p className='text-center mt-3'>Copyright &copy; June 2024, E Cart. Built with React</p>
      </div>
    </>
  )
}

export default Footer