import { Card } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};
export default function StoreItem({ id, name, price, img }: StoreItemProps) {
  return (
    <Card key={id}>
      <Card.Img variant="top" src={img}></Card.Img>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <div>{name}</div>
          <div>{price}</div>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
