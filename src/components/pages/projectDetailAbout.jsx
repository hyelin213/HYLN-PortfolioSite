import React from "react";

export default function ProjectDetailAbout({contents, githubLink, demoLink, language}) {
 
    return (
        <>
            <div className="detail-about">
                <div className="detail-about-left-top">
                    <h3>About</h3>
                    <p dangerouslySetInnerHTML={{ __html: contents }}></p>
                    <div className="language-used">
                        {language.map(item => <span>{item}</span>)}
                    </div>
                </div>
                <div className="detail-about-right-bottom">
                    <div className="link">
                        <a href={githubLink} target={'_blank'}>GITHUB</a>
                        <span>↗</span>
                    </div>
                    <div className="link">
                        <a href={demoLink}>DEMO</a>
                        <span>↗</span>
                    </div>
                </div>
            </div>
        </>
    );

}