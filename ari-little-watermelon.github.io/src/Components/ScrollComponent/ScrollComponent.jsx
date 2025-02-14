import React, {useState, useEffect} from 'react';
import './ScrollComponent.css';

const ScrollComponent = () => {
    const pages = ['A', 'B', 'C', 'D', 'E', 'F'];
    const [currentPage, setCurrentPage] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let scrollAccumulator = 0;
        const SCROLL_THRESHOLD = 20;

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
                                Page {page}
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