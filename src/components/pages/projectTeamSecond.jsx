import React from "react";
import ProjectDetailFrame from "./projectDetailFrame";
import sanitizeHTML from 'sanitize-html';

// 멜론 리사이트

export default function ProjectTeamSecond() {

    // XSS 방지를 위한 필터링 과정
    const contents = sanitizeHTML(
        `멜론 사이트 UI를 새롭게 배치한 사이트입니다.<br />
        프론트엔드 수업의 수료과정 중, 배우게된 기술을 활용해보는 것에 중점을 두었습니다.<br />
        차트 페이지와 매거진 페이지, 그리고 사이드 메뉴의 기능 적용과 헤더를 담당했습니다.`
    );

    const projectView = ['img_1', 'img_2', 'img_3'];

    return (
        <>
            <ProjectDetailFrame 
                title='Melon Resite'
                projectClass='팀 프로젝트 · 3인'
                duration='2022.11　-　2022.12'
                contribution='40'
                viewName='melon'
                contents={contents}
                githubLink='https://github.com/hyelin213/2022TeamProject_Melon.git'
                demoLink='https://hyelin213.github.io/2022TeamProject_Melon/'
                language={['HTML5', 'CSS3', 'JAVASCRIPT']}
                slide={projectView}
            />
        </>
    );
}