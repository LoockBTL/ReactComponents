import { FC, useState } from "react";
import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";
import { nanoid } from "nanoid";

interface TodoInterface {
  id: string;
  todoText: string;
  time: string;
}

const Todo: FC = () => {
  type Sort = "New" | "Old" | "";
  const [todo, setTodo] = useState<TodoInterface[]>([]);
  const [text, setText] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<Sort>("");

  let deleteTodo = (id: string): void => {
    setTodo((prevState) => prevState.filter((obj) => obj.id !== id));
  };
  return (
    <Container className="mt-3">
      <div>
        <InputGroup>
          <Form.Control
            placeholder="Write your text..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <input
            type="datetime-local"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <Button
            variant="success"
            onClick={() => {
              if (text.length === 0) {
              } else {
                setTodo((prevState) => [
                  ...prevState,
                  {
                    id: nanoid(),
                    time,
                    todoText: text,
                  },
                ]);
                setText("");
              }
            }}
          >
            Add
          </Button>
        </InputGroup>
      </div>
      <div className="w-100  mt-3">
        <Card.Title>Filters and Sorting</Card.Title>
        <Card.Body>
          <Form.Control
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Form.Check
            type="radio"
            name="dateSearch"
            label="Upcoming dates"
            value="New"
            onChange={() => {
              setSort("New");
            }}
          />
          <Form.Check
            type="radio"
            name="dateSearch"
            label="Distant dates"
            value="Old"
            onChange={() => {
              setSort("Old");
            }}
          />
        </Card.Body>
      </div>
      <div>
        {todo
          .filter((obj) => obj.todoText.includes(search))
          .sort((a, b) => {
            if (sort === "New") {
              return Date.parse(a.time) - Date.parse(b.time) >= 0 ? 1 : -1;
            } else if (sort === "Old") {
              return Date.parse(b.time) - Date.parse(a.time) >= 0 ? 1 : -1;
            } else {
              return 1;
            }
          })
          .map((obj) => (
            <TodoItem
              key={obj.id}
              id={obj.id}
              todoText={obj.todoText}
              time={obj.time}
              deleteFunc={deleteTodo}
            />
          ))}
      </div>
    </Container>
  );
};
interface TodoItemI extends TodoInterface {
  deleteFunc(id: string): void;
}
const TodoItem: FC<TodoItemI> = ({ id, deleteFunc, todoText, time }) => {
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todoText);
  return (
    <Card className="w-100 h-50">
      <Card.Header>
        <InputGroup>
          <Button
            variant="danger"
            onClick={() => {
              deleteFunc(id);
            }}
          >
            X
          </Button>
          <Button
            variant="success"
            onClick={() => {
              setEditStatus(!editStatus);
            }}
          >
            {editStatus ? "Save" : "Edit"}
          </Button>
        </InputGroup>
      </Card.Header>
      <Card.Body>
        {editStatus ? (
          <Form.Control
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          />
        ) : (
          <Card.Text>{editText}</Card.Text>
        )}
      </Card.Body>
      <Card.Footer>
        {!isNaN(new Date(time).valueOf())
          ? new Date(time).toLocaleString("en-GB")
          : "No date selected"}
      </Card.Footer>
    </Card>
  );
};

export default Todo;
