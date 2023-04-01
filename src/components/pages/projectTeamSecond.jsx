import React from "react";
import ProjectDetailFrame from "./projectDetailFrame";
import sanitizeHTML from 'sanitize-html';

// 멜론 리사이트

export default function ProjectTeamSecond() {

    // XSS 방지를 위한 필터링 과정
    const contents = sanitizeHTML(
        `멜론 사이트 UI를 새롭게 배치한 사이트입니다.<br />
        프론트엔드 수업의 수료과정 중, 배우게된 기술을 활용해보는 것에 중점을 두었습니다.<br />
        기존의 정형화된 구조에서 벗어나고자 하였고 음악적 이미지를 높일 수 있도록<br />
        기능 및 효과를 추가했습니다.
        `
    );

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
                demoLink='#'
                language={['HTML5', 'CSS3', 'JAVASCRIPT']}
            />
        </>
    );
}