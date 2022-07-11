import React from "react";
import Header from "./Header";
import "./New Form.css";
import Question_form from "./Question_form";
import CenteredTabs from "./Tabs";
import axios from "axios";
import {useState,useEffect} from "react"
export default function Form1() {

  const [survey, setsurvey] = useState('');
  const[isPending, setIspending]=useState(true);
useEffect(()=>{axios.get("http://localhost:9000/add_questions/:500")
.then(function (res){
console.log("hello"+ res.data.questions);
let que_data=[res.data.questions];
setsurvey(que_data);
setIspending(false);
});},[])


  return (
    <>
      <Header />
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
      {isPending &&  <div>Loading...</div> }
      {!isPending && <Question_form survey={survey}></Question_form>}
    </>
  );
}
