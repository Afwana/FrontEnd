import React, { useEffect, useState } from 'react'
import VideoCard from '../Components/VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../Services/allAPI'

function View(uploadVideoServerResponse) {
  const [allVideos,setAllVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)

  const getAllUploadedVideos = async () => {
    const {data} = await getAllVideos()
    setAllVideos(data);
  }
  useEffect(()=>{
    setDeleteVideoStatus(false)
    getAllUploadedVideos()
  },[uploadVideoServerResponse,deleteVideoStatus])
  // console.log(allVideos);
  return (
    <>
    <Row>
      {
        allVideos?.length>0?allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard displayData={video} setDeleteVideoStatus = {setDeleteVideoStatus} />
          </Col>
        )) : <h5 className='text-danger mt-3'> No videos available!!! </h5>
      }
    </Row>
    </>
  )
}

export default View