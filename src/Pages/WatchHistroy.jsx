import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../Services/allAPI'

function WatchHistory() {
  const [history, setHistory] = useState([])
  const getWatchHistory = async () => {
    const { data } = await getHistory()
    setHistory(data)
  }
  useEffect(() => {
    getWatchHistory()
  }

  )

  const handleDeleteHistory = async (id)=>{
    // make api call
    await deleteHistory(id)
    // get all history after deletion
    getWatchHistory()
  }

  return (
    <>
      <div className="d-flex justify-content-between container align-items-center mt-3">

        <h3>Watch History</h3>

        <Link to="/home" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}> <i class="fa-solid fa-arrow-left fa-beat me-1" ></i>Back To Home</Link>
      </div>
      <div className="container mt-5 mb-5 " >
        <table className="table light " variant="dark">
          <thead>
            <tr >
              <th> # </th>
              <th> Caption </th>
              <th> URL </th>
              <th> Time Stamp </th>
              <th> * </th>
            </tr>
          </thead>
          <tbody >
            {
              history.length > 0 ?
                history.map((item, index) => (
                  <tr>
                    <td> {index + 1} </td>
                    <td>{item?.caption}</td>
                    <td><a href={item?.embbedLink} target='_blank' >{item?.embbedLink}</a></td>
                    <td>{item?.timeStamp}</td>
                    <td> <button className='btn' onClick={()=>handleDeleteHistory(item?.id)}> <i className="fa-solid fa-trash"></i> </button> </td>
                  </tr>
                )) :


                <p className='fw-bolder fs-5 text-danger mt-3'>Sorry nothing to display!!!</p>
            }
          </tbody>
          </table>
      </div>
    </>
  )
}

export default WatchHistory

