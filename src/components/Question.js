import React, { useState } from "react";
import Options from "./Options";

export default function Question(props) {
  let pre = [];
  const [noopt, setnoopt] = useState(0);
  const opt = () => {
    setnoopt(noopt + 1);
    // console.log("EHLLOW ORD00", { noopt });
  };
  const look = () => {
    for (let i = 0; i < props.number; i++) {
      pre.push(
        <>
          {i + 1}
          {/* for (let j = 0; j < props.numberr; j++){
          pre1.push(
          
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-info"
              type="Add Question"
              id="button-addon1"
            >
              Button
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Add Question"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>)
    } */}

          {/* <div className="input-group mb-3">
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with checkbox"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with checkbox"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with checkbox"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with checkbox"
            />
          </div> */}
          <Options ions={noopt} />
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={opt}
          >
            Add Option
          </button>
          <hr></hr>
        </>
      );
    }
    return pre;
  };
  return (
    <div>
      <h1>{look()}</h1>
    </div>
  );
}
