import { Link } from 'react-router-dom'

const About = ({color}) => {
    return (
        <div>
            <h3 style={{ backgroundColor: color }} className='btn'> Version 1.0.0 </h3>
            <p> This is a practice project that involves creating a task reminder web app</p>
            <h5><br/>
             Lessons covered:
            <li>State</li>
            <li>Props</li>
            <li>Events</li>
            <li>Hooks</li>
            </h5>

            <br/>
            <Link to="/"> Go Back </Link>
        </div>
    )
}

About.defaultProps = {
    color: 'steelblue'
}

export default About