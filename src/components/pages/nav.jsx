import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const list = [
    {title: 'HOGWARTS SCHOOL', link: 'HogwartsSchool'},
    {title: 'MELON', link: 'Melon'},
    {title: 'HOW WEAHTER TODAY?', link: 'HWT'},
    {title: 'PORTFOLIO SITE', link: 'portfolioSite'},
]

export default function Nav() {

    useEffect(() => {
        AOS.init();
    })

    return (
        <nav>
            <ul>
                {list.map((item, idx) => (
                    <li className={`title-${idx+1}`}><Link to={item.link}>{item.title}</Link></li>
                ))}
            </ul>
        </nav>        
    );
}