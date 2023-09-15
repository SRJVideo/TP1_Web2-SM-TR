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
        <Monimage1 text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Messi gagne la coupe du monde.</p>
        </Carousel.Caption>
         
        </Carousel.Item>
        <Carousel.Item>

        <Monimage2 text="Second  slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Maradona gagne la coupe du monde.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

        <Monimage3 text="Third  slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Pele gagne la coupe du monde.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

        <Monimage4 text="Fourth  slide" />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Ronaldo gagne la coupe du monde.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

        <Monimage5 text="Fifth slide" />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Zidane gagne la coupe du monde.</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );

}

export default MonCarousel;