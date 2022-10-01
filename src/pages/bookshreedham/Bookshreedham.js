import React , {useState} from "react";
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Cards from '../../component/cards/Cards';
import { providesData } from '../../constant/MockData';
import Modals from '../../component/modal/Modal';
import Tables from '../../component/table/table';
import './Bookshreedham.css';
import GeneralTabs from '../../component/tabs/Tabs';
import Carousel from 'react-bootstrap/Carousel';



const Bookshreedham = () =>{
    

    const [openModal, setOpenModal] = useState(false)
    return(
        <>
      <Header />
      <div className="top-image booksri">
      <Carousel >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/images/shreeDham-hd.jpg"
                alt="First s slide"
                height="300px"
                width="400px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/images/shreeDham-hd.jpg"
                alt="First s slide"
                height="300px"
                width="400px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/images/shreeDham-hd.jpg"
                alt="First s slide"
                height="300px"
                width="400px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/images/shreeDham-hd.jpg"
                alt="First s slide"
                height="300px"
                width="400px"
              />
            </Carousel.Item>
          </Carousel>
        {/* <img src="assets/images/shreeDham-hd.jpg" alt="about" height="600px" /> */}
        <div style={{display:'none'}} className="project-image-text">Shree Dham brings you 1, 2, & 3 bedroom apartments in Ranchi.</div>
      </div>

      <div className="welcome-quote-container mr">
        <div className="welcome-quote-content">
          <div className="quote-title text-center">Shree Dham Residential Complex</div>
          <div className="quote-description w-100 text-center"><p>It is an upcoming project of Sri Ram Construction near Morabadi Ground. The Project is situated at a walking distance approx. 500 meter from Morabadi Football Ground, Ranchi.</p></div>
        </div>
      </div>
      
      <div className="features bs">
        <div className="features-content ffs">
          <div className="features-title">We Provides</div>
          <Cards data={providesData} />
        </div>
      </div>
      <div className="unit-selector-container">
        
        <Modals/>
       </div>
       
      <Footer />
    </>

    )
}
export default Bookshreedham