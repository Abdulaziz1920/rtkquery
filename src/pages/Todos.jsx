import { Button, Card, Modal } from "react-bootstrap";
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
} from "../redux/query/todosQuery";
import { useState } from "react";
import { useFormik } from "formik";

function Todos() {
  const [searchValue, setSearchValue] = useState("");
  const [formValue, setFormValue] = useState({});
  const [deleteTodo, setDeleteTodo] = useState("");
  const { data, refetch: getRefetch } = useGetTodosQuery({searchValue, formValue, deleteTodo});
  const [deleteItem] = useDeleteTodoMutation();
  const [addTodo] = useAddTodoMutation();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      rating: "",
      price: "",
      thumbnail: "",
    },
    onSubmit: (values) => {
      setFormValue(values);
      addTodo(values);
      formik.resetForm();
      getRefetch();
    },
  });

  const deleteTodos = (id) => {
    setDeleteTodo(id);
    deleteItem(id);
    getRefetch();
  };
  return (
    <div>
      <div className="container">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button variant="primary" onClick={handleShow}>
            Add
          </Button>
        </div>
        <div className="cards">
          {data?.map((el) => (
            <Card key={el.id}>
              <Card.Img variant="top" src={el.thumbnail} />
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
                  <Button onClick={() => deleteTodos(el.id)} variant="danger">
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <div id="modal">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Todos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="modalStyle" onSubmit={formik.handleSubmit}>
              <input
                onChange={formik.handleChange}
                value={formik.values.title}
                type="text"
                name="title"
                placeholder="Title"
              />
              <input
                onChange={formik.handleChange}
                value={formik.values.description}
                type="text"
                name="description"
                placeholder="Description"
              />
              <input
                onChange={formik.handleChange}
                value={formik.values.rating}
                type="text"
                name="rating"
                placeholder="Rating"
              />
              <input
                onChange={formik.handleChange}
                value={formik.values.price}
                type="text"
                name="price"
                placeholder="Price"
              />
              <input
                onChange={formik.handleChange}
                value={formik.values.imageUrl}
                type="text"
                name="thumbnail"
                placeholder="Image URL"
              />
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" onClick={handleClose} variant="primary">
                Save
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Todos;
