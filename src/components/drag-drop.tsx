import { FC, useState, DragEvent } from "react";
import { Card, Container } from "react-bootstrap";

const DragAndDrop: FC = () => {
  const [file, setFile] = useState<File[]>([]);
  const [drag, setDrag] = useState<boolean>(false);
  const dropFunction = (e: DragEvent) => {
    let files = e.dataTransfer.files;
    setFile(Array.from(files));

    e.preventDefault();
  };

  return (
    <Container>
      <Card className="w-100 h-50">
        <Card.Header>
          <Card.Title>Drag and drop area</Card.Title>
        </Card.Header>
        <Card.Body>
          <div
            style={{
              width: "500px",
              height: "500px",
              margin: "10px",
              borderWidth: "2px",
              borderColor: drag ? "red" : "black",
              borderStyle: drag ? "dotted" : "solid",
            }}
            onDragStart={(e) => {
              e.preventDefault();
              setDrag(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setDrag(false);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDrag(true);
            }}
            onDrop={(e: DragEvent) => {
              dropFunction(e);
            }}
          >
            {drag
              ? "Drag file or files in this area"
              : "Drop file or files in this area"}
          </div>
        </Card.Body>
      </Card>
      {file.map((obj) => (
        <Card className="w-100 h-50">
          <Card.Header>
            <Card.Title>{obj.name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>Type: {obj.type}</Card.Text>
            <Card.Text>Size: {obj.size.toLocaleString()} Kb</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
export default DragAndDrop;
