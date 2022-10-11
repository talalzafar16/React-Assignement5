import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import Home from "../Components/Home";
import Courses from "../Components/Courses";
import Learn from "../Components/Learn";
import Work from "../Components/Work";
export default function rout() {
  return (
          <>
            <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Home" element={<Home/>}/>
                <Route path="Courses" element={<Courses/>}/>
                <Route path="Learn" element={<Learn/>}/>
                <Route path="Work" element={<Work/>}/>
            </Routes>
        </Router>
        </>)
}
