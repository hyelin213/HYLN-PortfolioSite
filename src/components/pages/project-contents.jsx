import React, { useRef } from "react";

// pages components import
import Nav from "./nav";
import ProjectTeamFirst from "./projectTeamFirst";
import ProjectTeamSecond from "./projectTeamSecond";
import ProjectSingleFirst from "./projectSingleFirst"
import ProjectSingleSecond from "./projectSingleSecond"

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function ProjectContents() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/HYLN-PortfolioSite" element={<Nav />}/>
                <Route path="/HYLN-PortfolioSite/HogwartsSchool" element={<ProjectTeamFirst />}/>
                <Route path="/HYLN-PortfolioSite/Melon" element={<ProjectTeamSecond />}/>
                <Route path="/HYLN-PortfolioSite/HWT" element={<ProjectSingleFirst />}/>
                <Route path="/HYLN-PortfolioSite/portfolioSite" element={<ProjectSingleSecond />}/>
            </Routes>
        </BrowserRouter>
    );

}