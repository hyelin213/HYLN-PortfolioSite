import React, { useEffect, useRef, useState } from "react";

// pages components import
import Nav from "./nav";
import ProjectTeamFirst from "./projectTeamFirst";
import ProjectTeamSecond from "./projectTeamSecond";
import ProjectSingleFirst from "./projectSingleFirst";
import ProjectSingleSecond from "./projectSingleSecond";

import { Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// import history from 'history';



export default function ProjectContents() {

    const [path, setPath] = useState('/HYLN-PortfolioSite');
    const location = useLocation();

    useEffect(() => {
        console.log(location)
    }, [location]);

    let slideDirection = 'right';

    return (
        <TransitionGroup
            className="project-contents"
        >
            <CSSTransition
                key={location.pathname}
                classNames={slideDirection}
                timeout={500}
            >
                <Routes location={location}>
                    <Route path={path} element={<Nav />} />
                    <Route path={`${path}/HogwartsSchool`} element={<ProjectTeamFirst />} />
                    <Route path={`${path}/Melon`} element={<ProjectTeamSecond />} />
                    <Route path={`${path}/HWT`} element={<ProjectSingleFirst />} />
                    <Route path={`${path}/portfolioSite`} element={<ProjectSingleSecond />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );

}