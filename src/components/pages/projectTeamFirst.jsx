import React from "react";
import ProjectDetailFrame from "./projectDetailFrame";
import sanitizeHTML from 'sanitize-html';

// 호그와트 사이트

export default function ProjectTeamFirst() {

    // XSS 방지를 위한 필터링 과정
    const contents = sanitizeHTML(
        `현실의 해리포터를 좋아하는 매니아층과 세계관 속 호그와트 학생 등,<br />
        관계자들을 타겟으로 한 교육 플랫폼 기반의 학교 사이트입니다.<br />
        헤더, 푸터와 기숙사 목록페이지, 기숙사 상세페이지 그리고 마이페이지를 담당했습니다.`
    );

    return (
        <>
            <ProjectDetailFrame 
                title='Hogwarts School Site'
                projectClass='팀 프로젝트 · 4인'
                duration='2023.01　-　2023.02'
                contribution='25'
                viewName='hogwarts_school'
                contents={contents}
                githubLink='https://github.com/hyelin213/2023TeamProject_HogwartsSchool.git'
                demoLink='https://jihana030.github.io/Hogwarts_School/'
                language={['HTML5', 'SASS', 'JAVASCRIPT']}
            />
        </>
    );
    
}