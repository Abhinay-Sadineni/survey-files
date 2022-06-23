import React from "react";

export default function Options(props) {
  let pre1 = [];
  const look1 = () => {
    console.log(props.ions);
    for (let j = 0; j < props.ions; j++) {
      pre1.push(
        <>
          <div class="input-group mb-3">
            <div class="input-group-text">
              <input
                class="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with checkbox"
            />
          </div>
        </>
      );
    }
    return (
      <div>
        <h1>{look1()}</h1>
      </div>
    );
  };
}
