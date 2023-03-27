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
            className="project-list"
        >
            <CSSTransition
                key={location.pathname}
                classNames={slideDirection}
                timeout={700}
            >
                <Routes location={location}>
                    <Route path={path} element={<Nav style={{ position: 'absolute' }} />} />
                    <Route path={`${path}/HogwartsSchool`} element={<ProjectTeamFirst style={{ position: 'absolute' }} />} />
                    <Route path={`${path}/Melon`} element={<ProjectTeamSecond style={{ position: 'absolute' }} />} />
                    <Route path={`${path}/HWT`} element={<ProjectSingleFirst style={{ position: 'absolute' }} />} />
                    <Route path={`${path}/portfolioSite`} element={<ProjectSingleSecond style={{ position: 'absolute' }} />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );

}