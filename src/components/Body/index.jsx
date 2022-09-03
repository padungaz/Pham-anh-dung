import { useSelector } from "react-redux";
import NoteItem from "../NoteItem";
import "./style.scss";

function Body() {
  const noteList = useSelector((state) => state.note);

  const renderItem = () => {
    return noteList.map((item, index) => {
      return (
        <div key={item.id}>
          <NoteItem item={item} />
        </div>
      );
    });
  };

  return <div className="body">{renderItem()}</div>;
}

export default Body;
