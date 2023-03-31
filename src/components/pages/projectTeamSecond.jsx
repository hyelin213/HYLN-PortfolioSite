import React from "react";
import ProjectDetailFrame from "./projectDetailFrame";
import sanitizeHTML from 'sanitize-html';

export default function ProjectTeamSecond() {

    // XSS 방지를 위한 필터링 과정
    const contents = sanitizeHTML(
        `현실의 해리포터를 좋아하는 매니아층과 세계관 속 호그와트 학생 등,<br />
        관계자들을 타겟으로 한 교육 플랫폼 기반의 학교 사이트입니다.<br />
        기숙사 목록페이지, 기숙사 상세페이지 그리고 마이페이지를 담당했습니다.`
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