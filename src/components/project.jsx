import React, { useEffect } from "react";
import ProjectContents from "./pages/project-contents";
import { BrowserRouter as Router } from "react-router-dom";

export default function Project() {

    return (
        <>
            <div className="signature-shape">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>
                <div className="line line-5"></div>
                <div className="line line-6"></div>
                <div className="line line-7"></div>
                <div className="line line-8"></div>
                <div className="line line-9"></div>
                <div className="line line-10"></div>
                <div className="line line-11"></div>
                <div className="line line-12"></div>
            </div>
            <Router>
                <ProjectContents />
            </Router>
        </>
    );

}