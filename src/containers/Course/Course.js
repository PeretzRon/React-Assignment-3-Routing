import React, {Component} from 'react';

class Course extends Component {

    state = {
        courseTitle: ""
    }

    componentDidMount() {
        this.parseTitleFromParams();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.parseTitleFromParams();
    }

    parseTitleFromParams = () => {
        const query = new URLSearchParams(this.props.location.search);
        const courseTitle = query.get('courseTitle');
        if(this.state.courseTitle !== courseTitle){
            this.setState({courseTitle: courseTitle})
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;