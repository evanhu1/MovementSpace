import React from "react";
import { Link } from "react-router-dom";


class Home extends React.Component {
    render() {
        return (
        <div>
        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
            <div className="d-flex align-items-center justify-content-center"><h1 className="display-4">Movement Space</h1></div>
            
            <p className="lead">
                Find or create the next social movement.
            </p>
            <hr className="my-4" />
            <div className="d-flex align-items-center justify-content-center">
            <Link
                to="/movements"
                className="btn btn-lg custom-button align-items-center"
                role="button"
            >
                Enter
            </Link>
            </div>
            </div>
        </div>
        </div>
        </div>
        );
    }
} export default Home;
