import Carousel from 'react-bootstrap/Carousel';
import Monimage1 from '../images/aigle.jpg';
import Monimage2 from '../images/anaconda.jpg';
import Monimage3 from '../images/leopard.jpg';
import Monimage4 from '../images/lion.webp';
import Monimage5 from '../images/tigre.webp';


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
          <Carousel.Caption>
            <h3>Aigle</h3>
            <p>Le roi du ciel</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Monimage2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Anaconda</h3>
            <p>Le plus puissant</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Monimage3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Léopard</h3>
            <p>Léopard sur la branche d'arbre</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Monimage4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Lion</h3>
            <p>Le roi de la jungle</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Monimage5}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>Tigre</h3>
            <p>Le plus grand félin</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );

}

export default MonCarousel;