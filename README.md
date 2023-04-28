# :page_with_curl: Portfoilo Site - HYLN
<br/>
<div align="center">
<br/>
  <img src="https://user-images.githubusercontent.com/118185282/230319221-484bf85c-8a1f-4b96-b7ec-962008ce8299.gif"/>
</div>
<br/>

## :mega:프로젝트 소개
보유한 기술과 진행했던 프로젝트를 보여줄 수 있는 포트폴리오 사이트입니다.
<br/>

### :link:배포주소
> <https://hyelin213.github.io/HYLN-PortfolioSite/>

### :watch:개발기간
> 1인 제작<br/>
> 2023.03.18~ 2023.04.06

### :computer:개발환경
> `React(v18.2.0)`<br/>
> `Css3`<br/>
<br/>

## :pushpin:주요기능
#### 페이지 스크롤
- Swiper.js를 사용하여 모바일 버전에서도 원 페이지 스크롤 효과 부여

#### 라이트/다크 모드
- 부모 컴포넌트에 Context Provider를 지정하고 모드 버튼을 누를 때마다 html 태그에 classname "dark"를 추가 및 제거하여 화면 업데이트

#### 메뉴
- toggle 형식으로 상태를 관리하며 클래스 값 변동

#### About section
- Swiper.js를 사용하여 같은 주제의 title과 contents가 매치되도록 슬라이드

#### Project section
- Router를 사용하여 현재 페이지에서 렌더링되는 SPA 구현
- 페이지 전환 시 CSStransition을 통해 전환 방향 지정

#### Contact section
- Waypoint.js를 사용하여 영역 진입 시 헤더 및 메뉴 색상 변경
