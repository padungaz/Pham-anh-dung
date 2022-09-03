import { useState } from "react";

import { useDispatch } from "react-redux";
import "./style.scss";
import slices from "../../redux/slices";

function NoteItem({ item }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(slices.actions.remove(item.id));
  };

  return (
    <>
      <div className="note">
        <p className="note__title">{item.title}</p>
        <div className="note__btn">
          <button
            className="btn note__btn--edit"
            onClick={() => setShow(!show)}
          >
           {show === false ? "Show Details" : "Hide Details"}
          </button>
          <button
            className="btn todo-item__btn--del"
            style={{ color: "white", backgroundColor: " #db2828" }}
            onClick={handleRemove}
          >
            Remove Note
          </button>
        </div>
      </div>
      {show && <p className="note__details">{item.details}</p>}
      <hr />
    </>
  );
}

export default NoteItem;
