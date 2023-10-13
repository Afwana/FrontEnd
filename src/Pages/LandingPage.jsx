import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()
  const navigate = () => {
    navigateByUrl('/home')
  }
  return (
    <>
      <Row className='mt-5 mb-5 align-itens-center'>
        <Col></Col>
        <Col md={4}>
          <h2 className='mb-3'> Welcome to <span className='text-dark'> Veedio.com </span></h2>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt blanditis harum nesciunt provident,dignissimos sint eveninet reciendis velit ullam temporibus ratione quisquam laudantium eius optio ipsa recusandae voluptatem...</p>
          <button onClick={navigate} className='btn btn-success fw-bolder'> Get Started </button>
        </Col>
        <Col></Col>
        <Col md={6}>
          <img className='img-fluid me-5' src="https://clipground.com/images/png-dj-photo-9.png" alt="landing" />
        </Col>
      </Row>

      <div className="container mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">
        <h1> Features </h1>
        <div className='features mt-3 d-flex justify-content-between w-100'>
          <Card className='p-3 shadow' style={{ width: '22rem' }}>
            <Card.Img style={{height:'300px',width:'300px'}}  variant="top" src="https://cdn1.iconfinder.com/data/icons/iconshock-windows7-icons/256/color_settings.png" />
            <Card.Body>
              <Card.Title> Managing Videos </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3 shadow' style={{ width: '22rem' }}>
            <Card.Img style={{height:'300px',width:'300px'}}  variant="top" src="https://redtechnologiesinc.com/wp-content/uploads/2018/09/video-icon-gif2.gif" />
            <Card.Body>
              <Card.Title> Categorise Videos </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3 shadow' style={{ width: '22rem' }}>
            <Card.Img style={{height:'300px',width:'300px'}}  variant="top" src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Actions-edit-clear-history-icon.png" />
            <Card.Body>
              <Card.Title> Watch History </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>

      <div className="container border rounded p-5 border-secondary shadow mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="content">
          <h4 className='text-warning'> Simple, Fast and Powerful </h4>
          <h6> <span className='fs-5 me-3'>Play Everything :</span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi perspiciatis! Deleniti maxime.</h6>
          <h6> <span className='fs-5 me-3'>Categorise Videos :</span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi perspiciatis! Deleniti maxime.</h6>
          <h6> <span className='fs-5 me-3'>Managing History :</span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi perspiciatis! Deleniti maxime.</h6>
        </div>
        <div className="video ms-3">
          <iframe width="897" height="397" src="https://www.youtube.com/embed/NOA-1gQIZnI?list=RDDvS1rlMA64c" title="King of Kotha - Ee Ulakin Video | Dulquer Salmaan | Abhilash Joshiy | Shaan Rahman" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default LandingPage