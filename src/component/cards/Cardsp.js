import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import "./Cards.css";


const Cards = ({ data }) => {
  return (
    <Container className='parent-card-container'>
      <div className='parent-card-group'>
        <Card key={'Shree dham'} >
          <Card.Img variant="top" src={'assets/images/a1-hd.jpg'} height={'400px'} />
          <Card.Body>
            <Card.Title>Shree Dham (1/2/3 BHK Flats)</Card.Title>
            <Card.Text>This project is located in Green Park Area, 350m from Manya Place, Morabadi, Ranchi. We will have 2/3 BHK flats available here. We have all state-of-the-art facilities available here and you can enjoy city life at this place located in the heart of the city.  </Card.Text>
            <div className="w-100 d-flex"><a href="/Bookshreedham" className=" btn text-center m-auto btn-secondary link">Book Now</a></div>
          </Card.Body>
        </Card>
        <Card key={'Jaitra tower'} >
          <Card.Img variant="top" src={'assets/images/a2-hd.jpg'} height={'400px'} />
          <Card.Body>
            <Card.Title>Jaitra Tower ( 2/3 BHK Flats )</Card.Title>
            <Card.Text>This project is located in Vikash Nagar, Road No. 2, 500m from Singh More, Hatia, Ranchi. We will have 2/3 BHK flats available here. We have all state-of-the-art facilities available here and the scenic beauty of the city of Ranchi stand proudly behind it. </Card.Text>
            <div className="w-100 d-flex"><a href="#" className=" btn text-center m-auto btn-secondary link">Book Now</a></div>
          </Card.Body>
        </Card>
        <Card key={'Sri Ram Tower'} >
          <Card.Img variant="top" src={'assets/images/a3.jpg'} height={'400px'} />
          <Card.Body>
            <Card.Title>Sri Ram Tower Phase II ( 2/3 BHK Flats )</Card.Title>
            <Card.Text>This project is located in Green Park Area, 350m from Manya Place, Morabadi, Ranchi. We will have 2/3 BHK flats available here. We have all state-of-the-art facilities available here and you can enjoy city life at this place located in the heart of the city.</Card.Text>
            <div className="w-100 d-flex"><a href="#" className=" btn text-center m-auto btn-secondary link">Book Now</a></div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default Cards