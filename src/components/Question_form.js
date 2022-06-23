import React, { useState } from "react";
import Question from "./Question";
import "./Question_form.css";

function Question_form() {
  const [count, setHtml] = useState(0);

  const ques = () => {
    setHtml(count + 1);
  };

  const [count1, Setcount1] = useState(0);

  // const opt = () => {
  //   Setcount1(count1 + 1);
  // };
  return (
    <div>
      <div className="question_form">
        <br></br>
        <div className="question_title_section">
          <div className="question_form_top">
            <div className="section">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: "black" }}
                placeholder="Untitled document"
              ></input>
              <input
                type="text"
                className="question_form_top_desc"
                placeholder="Form Description"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="Add_Questions">
        <Question number={count} numberr={count1}></Question>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={ques}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Nuvola_Green_Plus.svg/2048px-Nuvola_Green_Plus.svg.png"
            className="plus"
          ></img>
          Add Question
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Question_form;
