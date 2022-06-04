import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const Calendar = () => {

    const handleClick = (e) => {
        // handle click
        const item = e.target;
    }

    return (
        <div>
            <Button type="button" as={Link} to="/individualday">1</Button>
            <Button type="button" onClick={handleClick} as={Link} to="/individualday">2</Button>
            <Button type="button" onClick={handleClick} as={Link} to="/individualday">3</Button>
            <Button type="button" onClick={handleClick} as={Link} to="/individualday">4</Button>
            <Button type="button" onClick={handleClick} as={Link} to="/individualday">5</Button>
            <Button type="button" onClick={handleClick} as={Link} to="/individualday">6</Button>
            <Button type="button" onClick={handleClick} as={Link} to="/individualday">7</Button>
            <Button type="button" onClick={handleClick} as={Link} to="/individualday">8</Button>
            <Button type="button" onClick={handleClick} as={Link} to="/individualday">9</Button>
            <Button type="button" onClick={handleClick} as={Link} to="/individualday">10</Button>
            <Button type="button" onClick={handleClick} as={Link} to="/individualday">11</Button>
            <Button type="button" onClick={handleClick} as={Link} to="/individualday">12</Button>
        </div>
    );
};

export default Calendar;