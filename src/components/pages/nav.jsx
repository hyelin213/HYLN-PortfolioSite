import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const list = [
    {title: 'HOGWARTS SCHOOL', link: 'HogwartsSchool'},
    {title: 'MELON', link: 'Melon'},
    {title: 'HOW WEATHER TODAY?', link: 'HWT'},
    {title: 'PORTFOLIO SITE', link: 'portfolioSite'},
]

export default function Nav() {

    return (
        <div className="project-list" style={{position: 'absolute'}}>
            <nav>
                <ul>
                    {list.map((item, idx) => (
                        <li className={`title title-${idx+1}`}>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>        
        </div>
    );
}