import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Recipes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        recipes: []
      };
    }
  
    componentDidMount() {
        const url = "/api/v1/recipes/index";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ recipes: response }))
          .catch(() => this.props.history.push("/"));
    }
    render() {
        const { recipes } = this.state;
        const allRecipes = recipes.map((recipe, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            {/* <div className="card mb-4">
            <Link to={`/recipe/${recipe.id}`} className="btn custom-button">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={`${recipe.name} image`}
              />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
               
                
              </div>
            </div> */}
            <div id="cardwrapper">
            <Card style={{ width: '18rem' }, {height: '10rem'},  {margin: '0.5rem'}}>
            <Link to={`/movement/${recipe.id}`} >
              <Card.Img variant="top" src={recipe.image} />
              
                <Card.ImgOverlay>
                  <div className = "overlaytextbox">
                <Card.Title className = "overlaytext">{recipe.name}</Card.Title>
                </div>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text> */}
                </Card.ImgOverlay>
                
                
                
              
              </Link>
            </Card>
            </div>
          </div>
          
          
        ));
        const noRecipe = (
          <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
              No recipes yet. Why not <Link to="/new_recipe">create one</Link>
            </h4>
          </div>
        );
    
        return (
          <>
            <section className="jumbotron jumbotron-fluid text-center">
              <div className="container py-5">
                <h1 className="display-4">Fight for an existing social justice movement</h1>
                <p className="lead text-muted">
                  For social movements to gain traction in modern society, continued support for each movement is very important. By joining the group, donating to the movement's foundation, and actively encouraging others, we can make this world a better place.
                </p>
              </div>
            </section>
            <div className="py-5">
              <main className="container">
                <div className="text-right mb-3">
                  <Link to="/create" className="btn custom-button">
                    Create New Movement
                  </Link>
                </div>
                <div className="row">
                  {recipes.length > 0 ? allRecipes : noRecipe}
                </div>
                <Link to="/" className="btn btn-link">
                  Home
                </Link>
              </main>
            </div>
          </>
        );
      }
  }
  export default Recipes;