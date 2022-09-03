import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import slices from "../../redux/slices";
import "./style.scss"
function Header() {
  const [formValue, setFormValue] = useState({
    title: "",
    details: "",
  });
  const dispatch = useDispatch();

  const handleAddNote = (e) => {
    e.preventDefault();
    dispatch(
      slices.actions.addNote({
        ...formValue,  id: uuidv4()
      })
    );

    setFormValue({ title: "", details: "" });
  };

  const handleForm = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="header">
      <h1>NOTE - APP</h1>
      <form>
        <div className="form">
          <div className="item-input">
            <input
              name="title"
              value={formValue.title}
              onChange={handleForm}
              type="text"
              placeholder="Note title "
            />
          </div>
          <div className="item-input">
            <input
              name="details"
              value={formValue.details}
              onChange={handleForm}
              type="text"
              placeholder="Note Details"
            />
          </div>
        </div>
        <div className="addNew">
          <button onClick={(e) => handleAddNote(e)} type="submit">
            ADD NOTE
          </button>
        </div>
      </form>
    </div>
  );
}

export default Header;
