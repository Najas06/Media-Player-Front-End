import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='justify-content-center alig-items-center'>
      <div className="footer d-flex justify-content-center alig-items-center ">
        <div className="website" style={{width:"400px"}}>
          <h5><i class="fa-solid fa-video text-warning me-2"></i> Media Player</h5>
          <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit mollitia, ipsa laboriosam voluptas voluptates et nesciunt! Omnis porro dolore hic eum, animi voluptatibus, ullam nobis, ad temporibus tenetur deleniti cum?</p>
        </div>
        <div className='links d-flex flex-column ms-5'>
          <h4>Links</h4>
          <Link to='/' style={{textDecoration:"none", color:"white"}}>Landing Page</Link>
          <Link to='/Home' style={{textDecoration:"none", color:"white"}}>Home Page</Link>
          <Link to='/Watchhistory' style={{textDecoration:"none", color:"white"}}>Watch history</Link>
        </div>
        <div className='guides d-flex flex-column ms-5'>
          <h4>Guides</h4>
          <Link to='https://react.dev/' target='_blank' style={{textDecoration:"none", color:"white"}}>React</Link>
          <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{textDecoration:"none", color:"white"}}>React Bootstrap</Link>
          <Link to='https://bootswatch.com/' target='_blank' style={{textDecoration:"none", color:"white"}}>Boots Watch</Link>
        </div>
        <div className="contactus ms-5">
          <h4>Contact US</h4>
          <input type="text" placeholder='Enter Your Email ID' style={{height:"40px",borderRadius:"10px", textAlign:"center"}}/>
          <button type="submit" style={{marginLeft:"10px" ,padding:"6px 10px", backgroundColor:"orange", color:"white", borderRadius:"10px"}}>Subscribe</button>
          <div className='d-flex justify-content-evenly ' >
            <Link to='' className='mt-3 fa-2x' style={{color:"white"}}><i class="fa-brands fa-facebook"></i></Link>
            <Link to='' className='mt-3 fa-2x' style={{color:"white"}}><i class="fa-brands fa-instagram"></i></Link>
            <Link to='' className='mt-3 fa-2x' style={{color:"white"}}><i class="fa-brands fa-twitter"></i></Link>
            <Link to='' className='mt-3 fa-2x' style={{color:"white"}}><i class="fa-solid fa-globe"></i></Link>
          </div>
        </div>
      </div>
      <div style={{textAlign:"center"}}>
        <p className='mt-5'>Copyright &copy; 2023 Media Player, Built With React </p>
      </div>
    </div>
    </>
  )
}

export default Footer