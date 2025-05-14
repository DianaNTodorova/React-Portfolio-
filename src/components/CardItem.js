import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import reactimg from '../images/science.png';
import cimg from '../images/c-.png';
import pythonimg from '../images/python.png';

import { cardData } from './cardData';

export default function CardItem() {
  const imageType = {
    react: reactimg,
    dotnet: cimg,
    python: pythonimg,
  };

  return (
    <div className="container mt-5 mb-5 justify-content-center">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardData.map((data, index) => {
          const techIcon = imageType[data.type?.toLowerCase()];
          return (
            <div className="col" key={index}>
              <div className="card h-100 card-item">
                <img
                  src={data.imgUrl}
                  className="card-img-top fixed-image"
                  alt={data.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text m-0">{data.text}</p>

                  {/* Conditionally render technology icon */}
                  {techIcon && (
                    <img
                      src={techIcon}
                      alt={`${data.type} icon`}
                      style={{ width: '30px', marginBottom: '10px' }}
                    />
                  )}

                  <div className="mt-auto">
                    {data.link && (
                      <Button
                        className="btn btn_second"
                        onClick={() => window.open(data.link, '_blank')}
                      >
                        See more
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
