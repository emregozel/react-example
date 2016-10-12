import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

ReactDOM.render(
  <div>
    <Layout/>
    <Data first_name="Emre Anıl" last_name="Gözel" email="emre@gozel.org" gender="Male"/>
  </div>
  , document.getElementById('app'));
