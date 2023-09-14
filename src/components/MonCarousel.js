import Carousel from 'react-bootstrap/Carousel';
import Monimage1 from '../images/messi.jpg';
import Monimage2 from '../images/maradona.jpg';
import Monimage3 from '../images/pele.jpg';
import Monimage4 from '../images/ronaldo.jpg';
import Monimage5 from '../images/zidane.jpg';


function MonCarousel() {

  return (
    <div>
      <h1 style={{ textAlign: "left" }}>Carousel</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Monimage1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Monimage2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Monimage3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Monimage4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Monimage5}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );

}

export default MonCarousel;