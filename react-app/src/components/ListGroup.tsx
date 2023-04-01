import "bootstrap/dist/css/bootstrap.css";
import { MouseEvent } from "react";
function ListGroup() {
  const items = ["tehran", "qom", "kish", "sari", " mashhad", "arak"];

  const handleClick = (e: MouseEvent)=>{console.log(e)
  }


  return (
    <>
      <ul className="list-group"></ul>
      {items.map((item) => (
        <li
          className="list-group-item"
          key={item}
          onClick={handleClick}
        >
          {item}
        </li>
      ))}
    </>
  );
}

export default ListGroup;
