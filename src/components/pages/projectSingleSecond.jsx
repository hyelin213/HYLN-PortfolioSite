import React from "react";
import ProjectDetailFrame from "./projectDetailFrame";
import sanitizeHTML from 'sanitize-html';

// 포트폴리오 사이트

export default function ProjectSingleSecond() {
    // XSS 방지를 위한 필터링 과정
    const contents = sanitizeHTML(
        `보유한 기술과 진행했던 프로젝트를 보여줄 수 있는 포트폴리오 사이트입니다.<br />
        정보를 쉽고 간단하게 파악하는 것을 목표로 했으며, SPA(Single Page Application)로<br />
        구성했습니다. React의 기초지식을 기반하여 다양한 기능의 활용을 목적으로 합니다.
        `
    );

    const projectView = ['img_1', 'img_2', 'img_3', 'img_4'];

    return (
        <>
            <ProjectDetailFrame 
                title='Portfolio Site'
                projectClass='개인 프로젝트'
                duration='2023.03'
                contribution='100'
                viewName='portfolio_site'
                contents={contents}
                githubLink='https://github.com/hyelin213/HYLN-PortfolioSite.git'
                demoLink='https://hyelin213.github.io/HYLN-PortfolioSite/'
                language={['HTML5', 'CSS3', 'REACT']}
                slide={projectView}
            />
        </>
    );
}