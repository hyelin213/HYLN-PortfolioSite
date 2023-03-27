import React from "react";
import { Link } from "react-router-dom";

const list = [
    {title: 'HOGWARTS SCHOOL', link: 'HogwartsSchool'},
    {title: 'MELON', link: 'Melon'},
    {title: 'HOW WEAHTER TODAY?', link: 'HWT'},
    {title: 'PORTFOLIO SITE', link: 'portfolioSite'},
]

export default function Nav() {
    return (
        <nav>
            <ul>
                {list.map(item => (
                    <li><Link to={item.link}>{item.title}</Link></li>
                ))}
            </ul>
        </nav>        
    );
}