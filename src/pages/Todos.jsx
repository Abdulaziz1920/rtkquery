import { Button, Card } from "react-bootstrap";
import { useGetTodosQuery } from "../redux/query/todosQuery";

function Todos() {
  const { data } = useGetTodosQuery();

  return (
    <div>
      <div className="container">
        <div className="cards">
          {data?.map((el) => (
            <Card key={el.id}>
              <Card.Img variant="top" src={el.images[0]} />
              <Card.Body>
                <Card.Title className="title">{el.title}</Card.Title>
                <Card.Text className="description">{el.description}</Card.Text>
                <div className="btn">
                  <Button variant="primary">
                    Price:
                    {new Intl.NumberFormat("ru-RU", {
                      style: "currency",
                      currency: "USD",
                    }).format(el.price)}
                  </Button>
                  <Button variant="danger">Delete</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todos;
