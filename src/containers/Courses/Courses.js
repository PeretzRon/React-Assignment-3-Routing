import React, {Component} from 'react';

import './Courses.css';
import Course from "../Course/Course";
import {Route} from "react-router-dom";

class Courses extends Component {
    state = {
        courses: [
            {id: 1, title: 'Angular - The Complete Guide'},
            {id: 2, title: 'Vue - The Complete Guide'},
            {id: 3, title: 'PWA - The Complete Guide'}
        ]
    }

    clickCourseHandler = (courseID, courseTitle) => {
        this.props.history.push({
            pathname: this.props.match.url + "/" + courseID,
            search: '?courseTitle=' + courseTitle,
        })
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <article onClick={() => this.clickCourseHandler(course.id, course.title)}
                                            className="Course" key={course.id}>
                                {course.title}
                            </article>;
                        })
                    }
                </section>
                <div>
                    <Route path={this.props.match.url + '/:id'} component={Course}/>
                </div>
            </div>
        );
    }
}

export default Courses;