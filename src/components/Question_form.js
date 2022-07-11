import React from "react";
import { useEffect, useState } from "react";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Typography } from "@material-ui/core";
import { BsTrash, BsFillFilterSquareFill } from "react-icons/bs";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Radio from "@material-ui/icons/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./Question_form.css";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios"

function Question_form(props) {
  console.log(props.survey);
  // var initialQ=[];
  // for(var key in props){
  //   initialQ[key]=props.survey[key];
  // }
  const [questions, setQuestions] = useState([
    {
      questionText: "New Question ?",
      questionType: "radio",
      options: [
        { optionText: "option1" },
        { optionText: "option2" },
        { optionText: "option3" },
        { optionText: "option4" },
      ],
      answer:false,
      answerKey:"",
      points:0,
      open: true,
      required: false,
    },
  ]);

useEffect(()=>{
  setQuestions((questions)=>[...questions,...props.survey[0]]);
  console.log('i fire once');
},[]);
  const [documentName, setDocName] = useState("untitled Document");

  const [documentDescription, setDocDesc] = useState("Add Description");



  function changeQuestion(text, i){
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
    console.log(newQuestion)
  }

  function addQuestionType(i, type){
    let qs = [...questions];
    console.log(type)
    qs[i].questionType = type;
    setQuestions(qs);
  }

  function changeOptionValue(text,i,j){
    var optionsQuestion = [...questions];
    optionsQuestion[i].options[j].optionText = text;
    setQuestions(optionsQuestion)
    console.log(optionsQuestion)
}

function removeOption(i, j){
  var RemoveOptionQuestion = [...questions];
  if(RemoveOptionQuestion[i].options.length > 1 ){
    RemoveOptionQuestion[i].options.splice(j,1);
    setQuestions(RemoveOptionQuestion)
    console.log(i + " " + j);
  }
}

function addOption(i){
  var optionsOfQuestion = [...questions];
  if(optionsOfQuestion[i].options.length  < 5){
    optionsOfQuestion[i].options.push({optionText: "Option" + (optionsOfQuestion[i].options.length + 1)})
  }
  else {
console.log("Max 5 options");
  }
  setQuestions(optionsOfQuestion)
}

function copyQuestion(i){
  expandCloseAll();
  let qs = [...questions];
  var newQuestion = qs[i]
  setQuestions([...questions, newQuestion])
}

function deleteQuestion(i){
  let qs = [...questions];
if(questions.length > 1){
  qs.splice(i,1);
}
setQuestions(qs);
}

function requiredQuestion(i){
var reqQuestion = [...questions];
reqQuestion[i].required = ! reqQuestion[i].required
console.log( reqQuestion[i].required[i])
setQuestions(reqQuestion)
}

function addMoreQuestionField(){
  expandCloseAll();
setQuestions([...questions, {questionText: "Question", questionType:"radio", options : [{optionText:"option 1"}], open: true, required:false}]);
}

function expandCloseAll(){
  let qs = [...questions];
  for(let j = 0; j < qs.length ; j++){
    qs[j].open = false;
  }
  setQuestions(qs);
}

function handleExpand(i){
  let qs = [...questions];
  for(let j = 0; j < qs.length ; j++){
  if(i == j){
    qs[i].open = true;
  }
  else{
    qs[j].open = true;
  }
  }
  setQuestions(qs);
}

function commitToDB(){
  axios.post("http://localhost:9000/add_questions",
    {
      document_name: documentName,
      doc_desc: documentDescription,
      questions: questions,
    })
}

function GetFromDB(){
  
}

  function questionsUI() {
    return questions.map((ques, i) => (

<Accordion
        expanded={questions.open}
        className={questions[i].open ? "add border" : ""}
        onChange={()=>{handleExpand(i)}}
      >
        <AccordionSummary
          aria-controls="panella-content"
          id="panelia-header"
          elevation={1}
          style={{ width: "100%" }}
        >
          {!questions[i].open ? (
            <div className="saved_questions">
              <Typography
                style={{
                  fontSize: "15px",
                  fontweight: "400px",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                }}
              >

                {i+1}. {questions[i].questionText}
                {ques.options.map((op, j) => (
                  <div key={j}>
                    <div style={{ display: "flex" }}>
                      <FormControlLabel
                        style={{ marginLeft: "5px", marginBottom: "5px" }}
                        disabled
                        control={
                          <input
                            type={ques.questionType}
                            color="primary"
                            style={{ marginRight: "3px" }}
                            required={ques.type}
                          />
                        }
                        label={
                          <Typography
                            style={{
                              fontFamily: "Roboto,Ariel,sans-serif",
                              fontSize: "13px",
                              fontweight: "400",
                              letterSpacing: ".2px",
                              lineHeight: "20px",
                              color: "#202124",
                            }}
                          >
                            {ques.options[j].optionText}
                          </Typography>
                        }
                      ></FormControlLabel>
                    </div>
                  </div>
                ))}
              </Typography>
            </div>
          ) : (
            ""
          )}
        </AccordionSummary>

        <div className="question_boxes">
          <AccordionDetails className="add_question">
            <div className="add_question_top">
              <input
                type="text"
                className="question"
                placeholder="Question"
                value={ques.questionText}
                onChange={(e)=>{changeQuestion(e.target.value, i)}}
              ></input>
              <Select
                className="select"
                style={{ color: "red", fontSize: "13px" }}
              >
                <MenuItem id="text" value="Text" onClick={()=>{addQuestionType(i,"text")}}>
                  {" "}
                  <SubjectIcon style={{ marginRight: "10px" }} /> paragraph
                  </MenuItem>
                <MenuItem id="checkbox" value="Checkbox" onClick={()=>{addQuestionType(i,"checkbox")}}>
                  {" "}
                  <CheckBoxIcon
                    style={{ marginRight: "10px", color: "#70757a" }}
                    checked
                    
                  />
                </MenuItem>
                <MenuItem id="radio" value="Radio" onClick={()=>{addQuestionType(i,"radio")}}
>
                  <Radio
                    style={{ marginRight: "13px", color: "#70757a" }}
                    checked
                  />{" "}
                  Multiple choice
                </MenuItem>
              </Select>
            </div>
            {ques.options.map((op, j) => (
              <div className="add_question_body" key={j}>
                {ques.questionType != "text" ? (
                  <input
                    type={ques.questionType}
                    style={{ marginRight: "10px" }}
                  />
                ) : (
                  <ShortTextIcon style={{ marginRight: "10px" }} />
                )}
                <div>
                  <input
                    type="text"
                    className="text_input"
                    placeholder="option"
                    value={ques.options[j].optionText}
                    onChange={(e)=>{changeOptionValue(e.target.value, i, j)}}
                  ></input>
                </div>
                {/* <CropOriginalIcon style={{ color: "#5f6368" }} /> */}
                <IconButton aria-label="delete">
                  <CloseIcon onClick={()=>removeOption(i, j)}  />
                </IconButton>
              </div>
            ))}

            {ques.options.length < 5 ? (
              <div className="add_question_body">
                <FormControlLabel
                  disabled
                  control={
                    ques.questionType != "text" ? (
                      <input
                        type={ques.questionType}
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                        disabled
                      />
                    ) : (
                      <ShortTextIcon style={{ marginRight: "10px" }} />
                    )
                  }
                  label={
                    <div>
                      <input
                        type="text"
                        className="text_input"
                        style={{ fontSize: "13px", width: "60px" }}
                        placeholder="Add option"
                      ></input>
                      <Button
                        size="small"
                        style={{
                          textTransform: "none",
                          color: "#4285f4",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                        onClick={()=>addOption(i)}>
                        Add option
                      </Button>
                    </div>
                  }
                />
              </div>
            ) : (
              ""
            )}

            <div className="add_footer">
              <div className="add_question_bottom_left">
                <Button
                  size="small"
                  style={{
                    texttransform: "none",
                    color: "#4285f4",
                    fontsize: "13px",
                    fontweight: "600",
                  }}
                >
                  <Button
                    style={{
                      border: "2px solid #4285f4",
                      padding: "2px",
                      marginRight: "8px",
                    }}
                  />
                  Answer Key
                </Button>
              </div>

              <div className="add_question_bottom">
                <IconButton aria-label="Copy" onClick={()=>{copyQuestion(i)}}>
                  <BsFillFilterSquareFill />
                </IconButton>
                <IconButton aria-label="delete" onClick={()=>{deleteQuestion(i)}}>
                  <BsTrash />
                </IconButton>
                <span style={{ color: "#5f6368", fontsize: "13px" }}>Required</span>{" "}
                <Switch name="checkedA" color="primary" onClick={()=>{requiredQuestion(i)}} checked></Switch>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>
            </div>
          </AccordionDetails>
          <div className="question_edit">
          {/* <AddCircleOutlineIcon className="edit" onClick={addMoreQuestionField}/> */}
          <img className="edit" onClick={addMoreQuestionField} src="https://png.pngtree.com/png-vector/20190418/ourmid/pngtree-vector-plus-icon-png-image_956060.jpg" style={{cursor:"pointer"}}></img>
          {/* <CropOriginalIcon className="edit"/> */}
          <TextFieldsIcon className="edit"/>
          </div>

        </div>
      </Accordion>

    ));
  }

  return (
    <div>
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: "black" }}
                placeholder="Untitled document"
                onChange={(e) => {
                  setDocName(e.target.value);}}
              ></input>
              <input
                type="text"
                className="question_form_top_desc"
                placeholder="Form Description"
                onChange={(e) => {
                  setDocDesc(e.target.value);
                }}
              ></input>
            </div>
          </div>

        
          {questionsUI()}
          <Button
              variant="contained"
              color="primary"
              onClick={commitToDB}
              style={{ fontSize: "14px" }}
            >
              Save
            </Button>
        </div>
      </div>
    </div>
  );
}
export default Question_form;
