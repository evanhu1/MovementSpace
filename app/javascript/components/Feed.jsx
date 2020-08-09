import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Side from "./Side.jsx";
class Create extends React.Component {
    render() {
        return (
        <div className="">
          <Side/>
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src="https://news.northeastern.edu/wp-content/uploads/2015/01/iStock_000053069786_Full_small-800x0-c-default.jpg"
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            News Feed
          </h1>
        </div>
        <div className="container py-2 d-flex align-items-center justify-content-center">
          <div className="rowfeed ">
            <div className="col-sm-12 col-lg-3 ">
              <ul className="list-group">
                <h5 className="mb-2"></h5>
                
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
            <div className= "feedelements">
            <div className="carousel ">
            <Carousel>
                <Carousel.Item>
                    <a href= "https://www.cnn.com/2020/08/08/us/white-man-erases-black-lives-matter-chalk-trnd/index.html">
                    <img
                        className="d-block w-100"
                        src="https://cdn.cnn.com/cnnnext/dam/assets/200807160712-02-white-man-erases-black-lives-matter-chalk-trnd-exlarge-169.jpg"
                    />
                    </a>
                    <Carousel.Caption>
                        <h3>After a White man erased girl's 'Black Lives Matter' chalk drawing in front of her home, neighbors stepped in to show support</h3>
                        <p>Alaa Elassar of CNN</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href= "https://www.nytimes.com/2020/08/07/nyregion/nypd-derrick-ingram-protester.html">
                    <img
                        className="d-block w-100"
                        src="https://static01.nyt.com/images/2020/08/07/nyregion/07NYPROTEST/07NYPROTEST-superJumbo.jpg?quality=90&auto=webp"
                    />
                    </a>
                    <Carousel.Caption >
                        <h3>N.Y.P.D. Besieges a Protest Leader as He Broadcasts Live</h3>
                        <p>Stack, Correal, Kim of the NYT</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href = "https://www.nbcnews.com/video/federal-officials-ghislaine-maxwell-played-critical-role-in-jeffrey-epstein-sex-abuse-ring-86816325645">
                    <img
                        className="d-block w-100"
                        src="https://i.guim.co.uk/img/media/8f064ac6d42af9ecee8237cacc00f232bf0975f1/0_100_4071_2443/master/4071.jpg?width=700&quality=85&auto=format&fit=max&s=41689040ec2f281d5c064b255d8216e9"
                    />
                    </a>
                    <Carousel.Caption>
                        <h3>Federal Officials: Ghislaine Maxwell Played 'critical role' in Jeffrey Epstein Sex Abuse Ring</h3>
                        <p>NBC News</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            </div>
            </div>
            
          </div>
        </div>
        <div className="container py-2 ">
          <Link to="/movements" className="btn btn-link">
            Back to Movements
          </Link>
          </div>
      </div>

     )
}
}
export default Create;