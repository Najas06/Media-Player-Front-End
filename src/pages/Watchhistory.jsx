import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getAllWatchHistory } from '../services/allAPI'

function Watchhistory() {
  const [history, setHistory] = useState([])
  async function Watchhistory() {
    const response = await getAllWatchHistory();
    console.log("===WatchHistory=====");
    const { data } = response;
    console.log(data);
    setHistory(data)
  }
  useEffect(() => {
    Watchhistory();
  },[])
  const handleDelete = async(id)=>{
    await deleteWatchHistory(id);
    Watchhistory();
  }
  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <h4>Watch History</h4>
        <Link to='/home' style={{ textDecoration: "none", color: "white", fontSize: "15px", fontWeight: "500" }}>
          <i class="fa-solid fa-arrow-left me-3"></i>Back to Home
        </Link>
      </div>
      <table className='table container mb-5 text-center'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Url</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody >
          {
            history.length > 0 ?
            history.map((item,index)=>(
              <tr>
                  <td>{index+1}</td>
                  <td>{item.caption}</td>
                  <td>{item.embededLink}</td>
                  <td>{item.timestamp}</td>
                  <td><button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button></td>

              </tr>
            )) 
              
                :
                <p>No Watch History Found</p>
              
          }
        </tbody>
      </table>
    </>
  )
}

export default Watchhistory