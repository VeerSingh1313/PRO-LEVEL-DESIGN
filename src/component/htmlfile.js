import React, { useEffect, useState } from 'react';
import NavScrollExample from './navbaar';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
// import MyCalendar from './calendar';
import AOS from "aos";
import "aos/dist/aos.css";

function ButtonWithImageChange() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    };

    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <Button className='myButton' onClick={handleClick}>
            {isClicked ? <img width={20} src='data:image/png;base64,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' alt="Close" /> : <img width={20} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz8+WlpZLS0v7+/vu7u5vb29TU1PDw8Pz8/N8fHyCgoITExMzMzOsrKyPj4+6urrU1NTo6Oizs7NCQkJkZGQoKCilpaUtLS05OTmenp7IyMiFhYVaWlpqamoLCwt+baPtAAACfUlEQVR4nO3di27CMAyF4TBWoAxYx2UX2Abv/5RbpSE2aXLSJpJl5/+ewEdQSlLXCQEAAAAAAAAAAAAAAAAA/Fu2H5/3dnyu2uWgfLv5xJ75Ljlf02kXO1LXpAWcHbQrHe0wSwm4XGvXmWGdcDU2G+0qs2ziX9SVdo2ZVrGAW+0Ks20jCZ+1C8z2LAecaddXgPx7+qhdXgGPYsKzdnkFnMWEL9rlFfAiJrxol1eCmFC7uCLEhJb/sV2txYT32uUVcBATWl03/daJCd+1yyvgXUzo4Mf0IgcMr9oFZnuNJGzetCvM9BZdIFq/EiNXof3v6SkeMISpdpUZpikBQ3jSrnO0p7SA3+tgixvCk8k8aS/xx2561K53oGOXvuV9Dbm9s2M7OB4AAAAAAAAAALBj2Z6mdpwGvm4Rmv1C+1nSYIt94rsIvdZmN/umTQ34oF3qaA9pAe19QW8WKQFtPuG+mscDWu/0lru8g4dm/Vi7gvVXZqIvzTTa9RUg3xbtNgvdyG1Ddm+FN/JN0Vqf0H82YkL7LcKxJmHt6oqo/DO0uaj46ygm9P9b6v9+6P8/jf//pRWsLfyvDytY41ewT2P5ppi411bBfmkFe949588tAAAAAAAAAACAJc7nRO06aw/Yhs36mtkcen1Onte21y51tMSZe+7nJp60q8ySMPvS/fzSxvrc+egMWtvzWXuxOcLa9RXg+yrsyVei/5nsdg+zupHn6vs/G0G7uiIqT2j9ft+Tz5mxuWz6Sz4ryHqXd0/u9Lbfqh9t1nd/7loFZ+eZf2kmev5hBWdY+j+HtIKzZCs4Dzj4P9O5Z+1c7g9euAAAAAAAAAAAAAAAAABQhS+ZyFZoP93BCgAAAABJRU5ErkJggg==' alt="Menu" />}
        </Button>
    );
}

function Htmlfile() {
    const [offsetX1, setOffsetX1] = useState(0);
    const [offsetY1, setOffsetY1] = useState(0);
    const [offsetX2, setOffsetX2] = useState(0);
    const [offsetY2, setOffsetY2] = useState(0);
    const [offsetX3, setOffsetX3] = useState(0);
    const [offsetY3, setOffsetY3] = useState(0);
    const [offsetX4, setoffsetx4] = useState(0);
    const [offsety4, setoffsety4] = useState(0)


    const handleMouseMove = (event, setOffsetX, setOffsetY) => {
        const containerRect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - containerRect.left;
        const mouseY = event.clientY - containerRect.top;

        const newOffsetX = (mouseX / containerRect.width - 0.5) * 20;
        const newOffsetY = (mouseY / containerRect.height - 0.5) * 20;

        setOffsetX(newOffsetX);
        setOffsetY(newOffsetY);

    };


    return (
        <>
            <NavScrollExample />
            <h1 className='heading'>NSIDE Cloneable CMS Template</h1>
            <Link className='text-black'>by Ty Hughey</Link>
            <div className='main_div text-white'>
                <div className='top_div'>
                    <div className='left_div '>
                        <div className='left_top'>
                            <h1>NSIDE.</h1>
                            <ButtonWithImageChange />
                        </div>
                        <div>
                            <h1>Interior design that matters.</h1>
                            <button className="container" id="movingbutton" style={{ transform: `translate(${offsetX4}px, ${offsety4}px)` }} onMouseMove={(event) => handleMouseMove(event, setoffsetx4, setoffsety4)}>
                                SERVICES
                            </button>
                        </div>
                    </div>
                    <div className='right_div text-dark'>
                        <Link className="container" id="container1" onMouseMove={(event) => handleMouseMove(event, setOffsetX1, setOffsetY1)}>
                            <p id="movingText1" style={{ transform: `translate(${offsetX1}px, ${offsetY1}px)` }}>SERVICES</p>
                        </Link>
                        <Link className="container" id="container2" onMouseMove={(event) => handleMouseMove(event, setOffsetX2, setOffsetY2)}>
                            <p id="movingText2" style={{ transform: `translate(${offsetX2}px, ${offsetY2}px)` }}>PROJECTS</p>
                        </Link>
                        <Link className="container" id="container3" onMouseMove={(event) => handleMouseMove(event, setOffsetX3, setOffsetY3)}>
                            <p id="movingText3" style={{ transform: `translate(${offsetX3}px, ${offsetY3}px)` }}>CONTACT</p>
                        </Link>
                    </div>
                    {/* <MyCalendar /> */}
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <h1 style={{ color: 'black' }}>hello</h1>
                    </div>
                </div>
            </div>

            <Row>
                <Col lg={12}>
                    <h1> VISHAL PANJITON WAALE 85KG MILK</h1>
                </Col>
            </Row>

        </>
    );
}
export default Htmlfile;