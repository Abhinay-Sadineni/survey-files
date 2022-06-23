// import Navbar from "./Navbar";
// import Textform from "./Textform";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Textform from "./Textform";
import Header from "./components/Header";
import Template from "./components/Template";
import Mainbody from "./components/Mainbody";
import Formheader from "./components/Formheader";
// import Header from "./Header";
import Form1 from "./components/New Form";
function App() {
  return (
    <>
      <Router>
        {/* <Router>
        <Route path="/">
          <Header></Header>
          <Template></Template>
          <Mainbody></Mainbody>
        </Route>
      </Router> */}
        <Header></Header>
        <Routes>
          <Route path="/Former" element={<Template />}></Route>
          <Route path="/Add" element={<Form1 />}></Route>
        </Routes>
      </Router>
      {/* <Template></Template> */}
      {/* <Mainbody></Mainbody> */}
    </>
  );
}

export default App;
