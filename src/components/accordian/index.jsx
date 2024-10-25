import { useState } from "react";

import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enable, setEnable] = useState(false);
  const [multiselect, setmultiselect] = useState([]);

  const handleSingleClick = (id) => {
    selected === id ? setSelected(null) : setSelected(id);
  };

  const handleMultiSelection = (id) => {
    let copyMultiple = [...multiselect];
    const findIndexOfCurrentId = copyMultiple.indexOf(id);
    findIndexOfCurrentId === -1
      ? copyMultiple.push(id)
      : copyMultiple.splice(findIndexOfCurrentId, 1);
    setmultiselect(copyMultiple);
  };

  return (
    <div className="wrapper">
      <center>
        <button
          onClick={() => {
            setEnable(!enable);
          }}
        >
          Enable Multi Selection
        </button>
      </center>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item-conteiner">
              <div
                onClick={
                  enable
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleClick(item.id)
                }
                className="item"
              >
                <div className="title">
                  <h3>{item.question}</h3>
                </div>
                <span>{selected === item.id ? "-" : "+"}</span>
              </div>
              {enable
                ? multiselect.indexOf(item.id) !== -1 && (
                    <div className="answer">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="answer">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
