import React from "react";
import "./New Form.css";
import Question_form from "./Question_form";
import CenteredTabs from "./Tabs";

export default function Form1() {
  return (
    <>
      <div className="form_header">
        <div className="form_header_left">
          <img
            src="https://png.pngitem.com/pimgs/s/399-3993710_sample-design-and-management-survey-questionnaire-red-wishlist.png"
            style={{ height: "45px", width: "45px" }}
          ></img>
          <input
            type="text"
            placeholder="Untitled form"
            className="form_name"
          ></input>
        </div>
        <div className="form_header_right"></div>
      </div>
      <CenteredTabs></CenteredTabs>
      <Question_form></Question_form>
    </>
  );
}
