import { Button } from 'react-bootstrap';
import { cardData } from './cardData';

export default function CardItem() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardData.map((data, index) => (
          <div className="col" key={index}>
            <div className="card h-100 card-item">
              <img
                src={data.imgUrl}
                className="card-img-top fixed-image"
                alt={data.title}
              />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.text}</p>
                <Button className="btn btn_second">See more</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
