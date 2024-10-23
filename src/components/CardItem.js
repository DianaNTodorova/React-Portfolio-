import { Button } from 'react-bootstrap';
export default function CardItem({ title, text, imgUrl }) {
  return (
    <div className="col p-3">
      <div className="card">
        <img src={imgUrl} className="card-img-top fixed-image" alt="..." />
        <div className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <Button className="m-2, btn_second">See more</Button>
        </div>
      </div>
    </div>
  );
}
