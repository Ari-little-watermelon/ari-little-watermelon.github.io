import React, {useState, useEffect} from 'react';
import './ScrollComponent.css';
import Landing from '../Landing/Landing';
import Project from '../Project/Project';
import SoulScoutsImage from '../../assets/projects-images/soulscouts.png';
import HyperesumeImage from '../../assets/projects-images/hyperesume.png';

const projectData = [
    {
        'id': 1,
        'title': 'SoulScouts',
        'image': SoulScoutsImage,
        'summary': 'an employee mental wellness tracker',
        'description': 'A comprehensive web-based platform that combines personal wellness tracking with anonymous support systems, while providing actionable insights to HR teams. The solution focusses on three key user groups: Employees, HR teams and Mental Wellness Coaches.',
        'skills': ['MongoDB','React','JWT','Express','Node', 'Redux', 'Axios',  'Figma', 'Git'],
        'github': 'https://github.com/arundhati-work/SoulScouts'
    },
    {
        'id': 2,
        'title': 'Hyperesume',
        'image': HyperesumeImage,
        'summary': 'a resume builder for job seekers',
        'description': 'Hyperesume is a full-featured resume builder application with multiple templates to choose from, designed to help job seekers create professional, customized resumes. It features role-based authentication for users and admin, resume management, PDF export, admin dashboard and responsive design.',
        'skills': ['React', 'SpringBoot', 'Tailwind', 'JWT', 'MyBatis', 'MySQL', 'Axios', 'Figma', 'Git'],
        'github': 'https://github.com/arundhati-work/hyperesume'
    },
]

const ScrollComponent = () => {
    const pages = [
        {'content': <Landing/>, index: 0},
        {'content': <Project data={projectData[0]}/>, index: 1},
        {'content': <Project data={projectData[1]}/>, index: 2},
        {'content': 'Page 3', index: 3},
    ];
    const [currentPage, setCurrentPage] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let scrollAccumulator = 0;
        const SCROLL_THRESHOLD = 100;

        const handleWheel = (e) => {
            e.preventDefault();

            if (isScrolling) return; 

            scrollAccumulator += e.deltaY;

            if (scrollAccumulator > SCROLL_THRESHOLD && currentPage < pages.length-1){
                setIsScrolling(true);
                setCurrentPage(prev => prev+1);
                scrollAccumulator = 0;
                setTimeout(() => setIsScrolling(false), 700);
            }
            else if (scrollAccumulator < -SCROLL_THRESHOLD && currentPage > 0) {
                setIsScrolling(true);
                setCurrentPage(prev => prev-1);
                scrollAccumulator = 0;
                setTimeout(()=> setIsScrolling(false), 700);
            }
        }

        const container = document.getElementById('fullpage-container');
        container.addEventListener('wheel', handleWheel, {passive: false});

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, [currentPage, pages.length, isScrolling]);


    return (
        <div id='fullpage-container'>
            <div className="pages-wrapper" style={{"--page-offset": `${-currentPage * 100}%`}}>
                {
                    pages.map((page, index) => (
                        <div key={index} className='page'>
                            <div className='page-content'>
                                {page.content}
                            </div>
                        </div>
                    ))
                }
            </div>

            <nav className='page-navigation'>
                {
                    pages.map((page, index) => (
                        <button
                            key = {index}
                            onClick={() => setCurrentPage(index)}
                            className={`nav-dot ${currentPage === index? 'active' : ''}`}
                        />
                    ))
                }
            </nav>
        </div>
    )
}

export default ScrollComponent;