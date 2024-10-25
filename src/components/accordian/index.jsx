import { useState } from "react";

import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  const handleSingleClick = (id) => {
    selected === id ? setSelected(null) : setSelected(id);
  };
  const handleMultiSelection = () => {
    console.log("click");
  };

  return (
    <div className="wrapper">
      <center>
        <button onClick={() => handleMultiSelection()}>
          Enable Multi Selection
        </button>
      </center>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item-conteiner">
              <div onClick={() => handleSingleClick(item.id)} className="item">
                <div className="title">
                  <h3>{item.question}</h3>
                </div>
                <span>{selected === item.id ? "-" : "+"}</span>
              </div>
              {selected === item.id && (
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
